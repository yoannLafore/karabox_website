enum TimeSlotStatus {
  PAST = 'PAST', // Time slot is in the past
  RESERVED = 'RESERVED', // Time slot is already reserved
  OWN_RESERVED = 'OWN_RESERVED', // Time slot is reserved by the user
  AVAILABLE = 'AVAILABLE', // Time slot is available
}

class TimeSlotUI {
  hour: number;
  minute: number;
  status: TimeSlotStatus;
  selected: boolean;
  id: string | null;

  constructor(
    hour: number,
    minute: number,
    status: TimeSlotStatus,
    selected: boolean = false,
    id: string | null = null,
  ) {
    this.hour = hour;
    this.minute = minute;
    this.status = status;
    this.selected = selected;
    this.id = id;
  }

  setSelected(selected: boolean) {
    return new TimeSlotUI(
      this.hour,
      this.minute,
      this.status,
      selected,
      this.id,
    );
  }
}

export { TimeSlotStatus, TimeSlotUI };
