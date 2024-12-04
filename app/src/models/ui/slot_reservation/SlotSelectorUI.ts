import { SlotBook } from '../../api/bookings/slotBook';
import { TimeSlotStatus, TimeSlotUI } from './TimeSlotUI';

class SlotSelectorUI {
  static readonly HOUR_START = 0;
  static readonly HOUR_END = 24;
  static readonly MINUTE_START = 0;
  static readonly MINUTE_END = 60;
  static readonly SLOT_LENGTH = 15;

  timeSlots: TimeSlotUI[][];

  constructor(timeSlots: TimeSlotUI[][]) {
    this.timeSlots = timeSlots;
  }

  static fromSlotBooksApi(slotBooks: SlotBook[], currentTime: Date) {
    const timeSlots: TimeSlotUI[][] = [];

    for (
      let hour = SlotSelectorUI.HOUR_START;
      hour < SlotSelectorUI.HOUR_END;
      hour++
    ) {
      const slots: TimeSlotUI[] = [];

      for (
        let minute = SlotSelectorUI.MINUTE_START;
        minute < SlotSelectorUI.MINUTE_END;
        minute += SlotSelectorUI.SLOT_LENGTH
      ) {
        // Check if the time slot is in the past
        const currentHour = currentTime.getHours();
        const currentMinute = currentTime.getMinutes();
        if (
          hour < currentHour ||
          (hour === currentHour && minute < currentMinute)
        ) {
          slots.push(new TimeSlotUI(hour, minute, TimeSlotStatus.PAST));
          continue;
        }

        // Check if the time slot is reserved
        if (
          slotBooks.some(
            (slotBook) =>
              slotBook.data.hours === hour && slotBook.data.minutes === minute,
          )
        ) {
          slots.push(new TimeSlotUI(hour, minute, TimeSlotStatus.RESERVED));
          continue;
        }

        // Else, the time slot is available
        slots.push(new TimeSlotUI(hour, minute, TimeSlotStatus.AVAILABLE));
      }

      timeSlots.push(slots);
    }

    return new SlotSelectorUI(timeSlots);
  }
}

export { SlotSelectorUI };
