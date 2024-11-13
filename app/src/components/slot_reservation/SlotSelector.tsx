import styles from './SlotSelector.module.scss';
import TimeSlot, { TimeSlotStatus } from './time_slot/TimeSlot';

function onClick(status: TimeSlotStatus) {
  console.log(status);
}

function SlotSelector() {
  return (
    <div className={styles['slot-selector-container']}>
      <TimeSlot
        hour={10}
        minute={0}
        status={TimeSlotStatus.PAST}
        onClick={onClick}
      />
      <TimeSlot
        hour={10}
        minute={30}
        status={TimeSlotStatus.RESERVED}
        onClick={onClick}
      />
      <TimeSlot
        hour={11}
        minute={0}
        status={TimeSlotStatus.AVAILABLE}
        onClick={onClick}
      />
      <TimeSlot
        hour={11}
        minute={30}
        status={TimeSlotStatus.SELECTED}
        onClick={onClick}
      />
    </div>
  );
}

export default SlotSelector;
