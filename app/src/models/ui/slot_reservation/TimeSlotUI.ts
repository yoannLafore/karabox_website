enum TimeSlotStatus {
  PAST = 'PAST', // Time slot is in the past
  RESERVED = 'RESERVED', // Time slot is already reserved
  AVAILABLE = 'AVAILABLE', // Time slot is available
}

class TimeSlotUI {
  hour: number;
  minute: number;
  status: TimeSlotStatus;
  selected: boolean;

  constructor(
    hour: number,
    minute: number,
    status: TimeSlotStatus,
    selected: boolean = false,
  ) {
    this.hour = hour;
    this.minute = minute;
    this.status = status;
    this.selected = selected;
  }

  setSelected(selected: boolean) {
    return new TimeSlotUI(this.hour, this.minute, this.status, selected);
  }
}

export { TimeSlotStatus, TimeSlotUI };
