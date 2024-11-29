import { Dayjs } from 'dayjs';
import { apiUrl } from '../config/apiConfig';
import axios from 'axios';
import { SlotBook } from '../models/api/bookings/slotBook';

const GET_BOOKINGS = '/get-booked-slots';

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

export { getBookings };
