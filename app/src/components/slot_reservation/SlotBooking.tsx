import BookSlotButton from './BookSlotButton';
import SlotSelector from './SlotSelector';

import styles from './SlotBooking.module.scss';

function SlotBooking() {
  return (
    <div className={styles['slot-booking-container']}>
      <SlotSelector />
      <BookSlotButton />
    </div>
  );
}

export default SlotBooking;
