import { TimeSlotUI } from './TimeSlotUI';

class SlotSelectorUI {
  timeSlots: TimeSlotUI[][];

  constructor(timeSlots: TimeSlotUI[][]) {
    this.timeSlots = timeSlots;
  }
}

export { SlotSelectorUI };
