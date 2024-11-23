import { Dayjs } from 'dayjs';
import { db } from '../config/firebaseConfig';
import { SlotBook } from '../models/bookings/slotBook';
import { SlotBookData } from '../models/bookings/slotBookData';
import { getCurrentDay } from '../utils/currentTime';
import { BookSlotResult } from '../models/bookings/bookSlotResult';

const SLOT_DURATION = 15; // The duration of each slot in minutes
const MAX_DAYS_IN_FUTURE = 7; // The maximum number of days in the future that a slot can be booked
const OPENING_HOUR = 0; // The opening hour of the day
const CLOSING_HOUR = 24; // The closing hour of the day

function checkBookSlotDay(data: SlotBookData) {
  const currentDay = getCurrentDay();

  const slotDay = data.bookingDate;

  // Check if the slot is in the past
  if (slotDay.isBefore(currentDay)) {
    throw new Error('Cannot book slot in the past');
  }

  // Check if the slot is too far in the future
  const maxDay = currentDay.add(MAX_DAYS_IN_FUTURE, 'day');

  if (slotDay.isAfter(maxDay)) {
    throw new Error('Cannot book slot more than 7 days in the future');
  }
}

function checkBookSlotTime(data: SlotBookData) {
  const slotHour = data.hours;
  const slotMinute = data.minutes;

  // Check if the slot is outside of the opening hours
  if (slotHour < OPENING_HOUR || slotHour >= CLOSING_HOUR) {
    throw new Error('Slot is outside of opening hours');
  }

  // Check minutes is within 0-59
  if (slotMinute < 0 || slotMinute >= 60) {
    throw new Error('Minutes must be between 0 and 59');
  }

  // Check if the slot is on the hour or on a 15 minute interval
  if (slotMinute % SLOT_DURATION !== 0) {
    throw new Error('Slot must be on the hour or on a 15 minute interval');
  }
}

async function checkSlotIsFree(data: SlotBookData) {
  const isBooked = await isSlotAlreadyBooked(data);

  if (isBooked) {
    throw new Error('Slot is already booked');
  }
}

async function isSlotAlreadyBooked(data: SlotBookData) {
  const slots = await getBookedSlotForDay(data.bookingDate);

  return slots.reduce((acc, slot) => {
    if (slot.data.hours === data.hours && slot.data.minutes === data.minutes) {
      return true;
    }

    return acc;
  }, false);
}

async function getBookedSlotForDay(date: Dayjs) {
  // Convert date to start of day
  const dayStr = SlotBookData.dayStringFromDate(date);

  const query = await db
    .collection(SlotBook.collectionName)
    .where(SlotBookData.bookingDateFieldName, '==', dayStr)
    .get();

  const slots = query.docs.map((doc) => SlotBook.fromFirebaseDoc(doc));

  return slots;
}

async function bookSlot(data: SlotBookData): Promise<BookSlotResult> {
  try {
    checkBookSlotDay(data);
    checkBookSlotTime(data);
    await checkSlotIsFree(data);
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Internal error';

    return BookSlotResult.fail(message);
  }

  console.log(data.toDbJson());

  try {
    await db.collection(SlotBook.collectionName).add(data.toDbJson());
    return BookSlotResult.success();
  } catch (e) {
    return BookSlotResult.fail('Internal error');
  }
}

async function getSlot(slotId: string) {
  const slot = await db.collection(SlotBook.collectionName).doc(slotId).get();
  return SlotBook.fromFirebaseDoc(slot);
}

async function unbookSlot(slotId: string, userId: string) {
  try {
    const slot = await getSlot(slotId);

    if (slot.data.userId !== userId) {
      return false;
    }

    await db.collection(SlotBook.collectionName).doc(slotId).delete();
    return true;
  } catch (e) {
    return false;
  }
}

export { getBookedSlotForDay, bookSlot, unbookSlot };
