import { TimeSlotUI } from '../../models/ui/slot_reservation/TimeSlotUI';
import styles from './SlotSelector.module.scss';
import TimeSlot from './time_slot/TimeSlot';
import { SlotSelectorUI } from '../../models/ui/slot_reservation/SlotSelectorUI';

interface SlotSelectorProps {
  slotSelector: SlotSelectorUI;
  onTimeSlotClick: (timeSlot: TimeSlotUI) => void;
}

function SlotSelector({ slotSelector, onTimeSlotClick }: SlotSelectorProps) {
  console.log(slotSelector);

  const rows = slotSelector.timeSlots.map((row, index) => {
    return (
      <div key={index} className={styles['slot-selector-row']}>
        {row.map((timeSlot, index) => (
          <TimeSlot key={index} timeSlot={timeSlot} onClick={onTimeSlotClick} />
        ))}
      </div>
    );
  });

  return <div className={styles['slot-selector-container']}>{rows}</div>;
}

export default SlotSelector;
