import styles from './TimeSlot.module.scss';

enum TimeSlotStatus {
  PAST = 'PAST', // Time slot is in the past
  RESERVED = 'RESERVED', // Time slot is already reserved
  AVAILABLE = 'AVAILABLE', // Time slot is available
  SELECTED = 'SELECTED', // Time slot is selected
}

interface TimeSlotProps {
  hour: number;
  minute: number;
  status: TimeSlotStatus;
  onClick: (status: TimeSlotStatus) => void;
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

function TimeSlot({ hour, minute, status, onClick }: TimeSlotProps) {
  const slotTimeStr = formatTime(hour, minute);

  return (
    <div
      className={`${styles['time-slot']} ${getStatusClassNames(status)}`}
      onClick={() => onClick(status)}
    >
      <p>{slotTimeStr}</p>
    </div>
  );
}

export default TimeSlot;
export { TimeSlotStatus };
