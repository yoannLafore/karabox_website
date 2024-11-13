enum TimeSlotStatus {
  PAST = 'PAST', // Time slot is in the past
  RESERVED = 'RESERVED', // Time slot is already reserved
  AVAILABLE = 'AVAILABLE', // Time slot is available
  SELECTED = 'SELECTED', // Time slot is selected
}

class TimeSlotUI {
  hour: number;
  minute: number;
  status: TimeSlotStatus;

  constructor(hour: number, minute: number, status: TimeSlotStatus) {
    this.hour = hour;
    this.minute = minute;
    this.status = status;
  }
}

export { TimeSlotStatus, TimeSlotUI };
