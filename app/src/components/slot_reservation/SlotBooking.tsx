import BookSlotButton from './BookSlotButton';
import SlotSelector from './SlotSelector';

import styles from './SlotBooking.module.scss';

import { TimeSlotUI } from '../../models/ui/slot_reservation/TimeSlotUI';
import { SlotSelectorUI } from '../../models/ui/slot_reservation/SlotSelectorUI';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

interface SlotBookingProps {
  timeSlotSelectorUI: SlotSelectorUI;
  onDayChange: (date: dayjs.Dayjs) => void;
  onTimeSlotClick: (timeSlot: TimeSlotUI) => void;
  onBookSlotClick: () => void;
}

function SlotBooking({
  timeSlotSelectorUI,
  onDayChange,
  onTimeSlotClick,
  onBookSlotClick,
}: SlotBookingProps) {
  return (
    <div className={styles['slot-booking-container']}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Date"
          defaultValue={dayjs()}
          value={null}
          onChange={(day) => {
            if (!day) {
              return;
            }
            onDayChange(day);
          }}
        />
      </LocalizationProvider>
      <SlotSelector
        slotSelector={timeSlotSelectorUI}
        onTimeSlotClick={onTimeSlotClick}
      />
      <BookSlotButton onClick={onBookSlotClick} />
    </div>
  );
}

export default SlotBooking;
