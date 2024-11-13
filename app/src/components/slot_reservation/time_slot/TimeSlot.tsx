import styles from './TimeSlot.module.scss';
import {
  TimeSlotUI,
  TimeSlotStatus,
} from '../../../models/ui/slot_reservation/TimeSlotUI';

interface TimeSlotProps {
  timeSlot: TimeSlotUI;
  onClick: (timeSlot: TimeSlotUI) => void;
}

function getStatusClassNames(status: TimeSlotStatus) {
  switch (status) {
    case TimeSlotStatus.PAST:
      return styles['past'];
    case TimeSlotStatus.RESERVED:
      return styles['reserved'];
    case TimeSlotStatus.AVAILABLE:
      return styles['available'];
    case TimeSlotStatus.SELECTED:
      return styles['selected'];
    default:
      return '';
  }
}

/**
 * Format time to --:-- string
 *
 * @param hour The hour
 * @param minute The minute
 * @returns the formatted time string
 */
function formatTime(hour: number, minute: number) {
  // Format time to --:-- string
  const hourStr = hour < 10 ? `0${hour}` : hour;
  const minuteStr = minute < 10 ? `0${minute}` : minute;
  return `${hourStr}:${minuteStr}`;
}

function TimeSlot({ timeSlot, onClick }: TimeSlotProps) {
  const slotTimeStr = formatTime(timeSlot.hour, timeSlot.minute);

  return (
    <div
      className={`${styles['time-slot']} ${getStatusClassNames(timeSlot.status)}`}
      onClick={() => onClick(timeSlot)}
    >
      <p>{slotTimeStr}</p>
    </div>
  );
}

export default TimeSlot;
