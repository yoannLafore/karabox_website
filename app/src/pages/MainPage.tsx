import Description from '../components/description/Description';
import SlotBooking from '../components/slot_reservation/SlotBooking';
import { SlotSelectorUI } from '../models/ui/slot_reservation/SlotSelectorUI';
import styles from './MainPage.module.scss';

function MainPage() {
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
              timeSlotSelectorUI={new SlotSelectorUI([])}
              onDayChange={() => {}}
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
