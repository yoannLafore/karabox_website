import { Dayjs } from 'dayjs';
import { apiUrl } from '../config/apiConfig';
import axios from 'axios';
import { SlotBook } from '../models/api/bookings/slotBook';
import { BookSlotResult } from '../models/api/bookings/bookSlotResult';

const GET_BOOKINGS = '/get-booked-slots';
const BOOK_SLOT = '/book-slot';
const UNBOOK_SLOT = '/unbook-slot';

async function getBookings(day: Dayjs, token: string | null) {
  const dayStr = day.format('YYYY-MM-DD');

  const data = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      day: dayStr,
    },
  };

  const res = await axios.get(`${apiUrl}${GET_BOOKINGS}`, data);

  const bookedSlotsRaw = res.data.bookedSlots;

  const bookedSlots = bookedSlotsRaw.map((slot: any) => {
    return SlotBook.fromApiResponse(slot);
  });

  return bookedSlots;
}

async function bookSlot(
  day: Dayjs,
  hours: number,
  minutes: number,
  token: string,
) {
  const dayStr = day.format('YYYY-MM-DD');

  const data = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      day: dayStr,
      hours: hours,
      minutes: minutes,
    },
  };

  const res = await axios.get(`${apiUrl}${BOOK_SLOT}`, data);

  const bookResult = BookSlotResult.fromApiResponse(res.data);

  return bookResult;
}

async function unbookSlot(slotId: string, token: string) {
  const data = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      slotId: slotId,
    },
  };

  const res = await axios.get(`${apiUrl}${UNBOOK_SLOT}`, data);

  return res.data.success;
}

export { getBookings, bookSlot, unbookSlot };
