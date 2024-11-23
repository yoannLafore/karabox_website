import express, { Request, Response } from 'express';
import cors from 'cors';
import { bookSlot, getBookedSlotForDay } from './services/bookingService';
import { SlotBookData } from './models/bookings/slotBookData';
import dayjs from 'dayjs';
import {
  AuthRequest,
  firebaseAuthMiddleware,
} from './middleware/firebaseAuthMiddleware';

const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());

app.get(
  '/book-slot',
  firebaseAuthMiddleware,
  async (req: Request, res: Response) => {
    const reqAuth = req as AuthRequest;
    const userId = reqAuth.user.user_id;

    const day = req.query.day as string;
    const hoursStr = req.query.hours as string;
    const minutesStr = req.query.minutes as string;

    if (!day || !hoursStr || !minutesStr) {
      return res.status(400).send({
        error: 'Day, hours and minutes query parameters are required',
      });
    }

    const hours = parseInt(hoursStr);
    const minutes = parseInt(minutesStr);

    const data = new SlotBookData(userId, dayjs(day), hours, minutes);
    const result = await bookSlot(data);

    res.send(result.toJson());
  },
);

app.get('/get-booked-slots', async (req: Request, res: Response) => {
  const day = req.query.day as string;

  if (!day) {
    return res.status(400).send({ error: 'Day query parameter is required' });
  }

  const date = dayjs(day);

  try {
    const slots = await getBookedSlotForDay(date);
    const slotsJson = slots.map((slot) => slot.data.toDbJson());
    res.send({ bookedSlots: slotsJson });
  } catch (e) {
    return res.status(500).send({ error: 'Internal error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
