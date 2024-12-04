import { useEffect, useState } from 'react';
import Description from '../components/description/Description';
import SlotBooking from '../components/slot_reservation/SlotBooking';
import { SlotSelectorUI } from '../models/ui/slot_reservation/SlotSelectorUI';
import styles from './MainPage.module.scss';
import { useQuery } from '@tanstack/react-query';
import dayjs, { Dayjs } from 'dayjs';
import { bookSlot, getBookings, unbookSlot } from '../services/bookingService';
import { TimeSlotUI } from '../models/ui/slot_reservation/TimeSlotUI';
import { useAuth } from '../hooks/auth/useAuth';

function MainPage() {
  const { user, token } = useAuth();

  const [selectedDay, setSelectedDay] = useState<Dayjs>(dayjs());

  const query = useQuery({
    queryKey: ['bookedSlots', selectedDay],
    queryFn: () => getBookings(selectedDay, null),
  });

  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlotUI | null>(
    null,
  );

  const [slotSelector, setSlotSelector] = useState<SlotSelectorUI>(
    SlotSelectorUI.empty(),
  );

  useEffect(() => {
    if (query.data) {
      let slotSelector = SlotSelectorUI.fromSlotBooksApi(
        query.data,
        dayjs(),
        selectedDay,
        user?.uid,
      );

      if (selectedTimeSlot) {
        slotSelector = slotSelector.withSelectTimeSlot(selectedTimeSlot);
      }

      setSlotSelector(slotSelector);
    }
  }, [query.data, selectedDay, selectedTimeSlot, user?.uid]);

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
              timeSlotSelectorUI={slotSelector}
              onDayChange={(day) => {
                setSelectedDay(day);
                setSelectedTimeSlot(null);
                // Refresh the query
                query.refetch();
              }}
              onBookSlotClick={() => {
                if (selectedTimeSlot) {
                  if (!token) {
                    // Navigate to login
                    window.location.href = '/login';
                    return;
                  }

                  if (slotSelector.isOwnReservedSelected()) {
                    // Unbook the slot
                    unbookSlot(selectedTimeSlot.id!, token!).then(
                      () => {
                        query.refetch();
                      },
                      (error) => {
                        console.error(error);
                      },
                    );
                  } else {
                    bookSlot(
                      selectedDay,
                      selectedTimeSlot.hour,
                      selectedTimeSlot.minute,
                      token!,
                    ).then(
                      (result) => {
                        if (!result.success) {
                          alert('Failed to book slot : ' + result.message);
                        }
                        query.refetch();
                      },
                      (error) => {
                        console.error(error);
                      },
                    );
                  }

                  setSelectedTimeSlot(null);
                } else {
                  alert('Please select a time slot');
                }
              }}
              onTimeSlotClick={(timeSlot) => {
                if (
                  timeSlot.status === 'AVAILABLE' ||
                  timeSlot.status === 'OWN_RESERVED'
                ) {
                  setSelectedTimeSlot(timeSlot);
                  //setSlotSelector(slotSelector.withSelectTimeSlot(timeSlot));
                }
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
