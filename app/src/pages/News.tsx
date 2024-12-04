import axios from 'axios';
import { apiUrl } from '../config/apiConfig';
import { useAuth } from '../hooks/auth/useAuth';
import dayjs from 'dayjs';
import { bookSlot, getBookings, unbookSlot } from '../services/bookingService';

async function onClick(token: string | null) {
  console.log(token);

  // const day = dayjs().format('YYYY-MM-DD');

  // const data = {
  //   headers: {
  //     Authorization: 'Bearer ' + token,
  //   },
  //   params: {
  //     day: day,
  //     hours: 10,
  //     minutes: 15,
  //     slotId: 'mUFZ7RYEDelEGBxmk195',
  //   },
  // };

  // // const res = await axios.get(apiUrl + '/get-booked-slots', data);
  // const res = await axios.get(apiUrl + '/unbook-slot', data);

  const day = dayjs('2024-12-1');

  const slots = await getBookings(day, token);
  console.log(slots);

  //console.log(res.data);
}

async function onClickBookSlot(token: string | null) {
  const bookRes = await bookSlot(dayjs('2024-11-30'), 23, 45, token!);

  console.log(bookRes);
}

async function onClickUnbookSlot(token: string | null) {
  const res = await unbookSlot('Z2APo7L5DoiLRufA0du0', token!);

  console.log(res);
}

function News() {
  const { token } = useAuth();

  return (
    <div>
      <h1>News</h1>
      <button onClick={() => onClick(token)}>Get bookings</button>
      <button onClick={() => onClickBookSlot(token)}>Book slot</button>
      <button onClick={() => onClickUnbookSlot(token)}>Unbook slot</button>
    </div>
  );
}

export default News;
