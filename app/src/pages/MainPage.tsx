import { useState } from 'react';
import Description from '../components/description/Description';
import SlotBooking from '../components/slot_reservation/SlotBooking';
import { SlotSelectorUI } from '../models/ui/slot_reservation/SlotSelectorUI';
import styles from './MainPage.module.scss';
import { useQuery } from '@tanstack/react-query';
import dayjs, { Dayjs } from 'dayjs';
import { getBookings } from '../services/bookingService';

function MainPage() {
  const [selectedDay, setSelectedDay] = useState<Dayjs>(dayjs());

  const query = useQuery({
    queryKey: ['bookedSlots', selectedDay],
    queryFn: () => getBookings(selectedDay, null),
  });

  return (
    <div className={styles['main-page-container']}>
      <main>
        <div className={styles['title']}>
          <h1>Take a Break, Take the Mic!</h1>
          <p>
            Grab a friend, take the stage, and let the music flow - completely
            free, just for students on campus!
          </p>
        </div>

        <div className={styles['main-page-content-container']}>
          <div className={styles['description-container']}>
            <Description />
          </div>
          <div className={styles['vertical-line']}></div>
          <div className={styles['slot-selector-container']}>
            <SlotBooking
              timeSlotSelectorUI={SlotSelectorUI.fromSlotBooksApi(
                query.data ? query.data : [],
                new Date(),
              )}
              onDayChange={(day) => {
                setSelectedDay(day);
                // Refresh the query
                //query.refetch();
              }}
              onBookSlotClick={() => {}}
              onTimeSlotClick={() => {}}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
