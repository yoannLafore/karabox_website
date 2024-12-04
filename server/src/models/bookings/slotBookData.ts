import dayjs, { Dayjs } from 'dayjs';

class SlotBookData {
  static readonly dayFormat = 'YYYY-MM-DD';

  static readonly userIdFieldName = 'userId';
  static readonly bookingDateFieldName = 'day';
  static readonly hoursFieldName = 'hours';
  static readonly minutesFieldName = 'minutes';

  userId: string;
  bookingDate: Dayjs;
  hours: number;
  minutes: number;

  constructor(
    userId: string,
    bookingDate: Dayjs,
    hours: number,
    minutes: number,
  ) {
    this.userId = userId;
    this.bookingDate = bookingDate.startOf('day');
    this.hours = hours;
    this.minutes = minutes;
  }

  toDbJson(): any {
    return {
      [SlotBookData.userIdFieldName]: this.userId,
      [SlotBookData.bookingDateFieldName]: this.bookingDate.format(
        SlotBookData.dayFormat,
      ),
      [SlotBookData.hoursFieldName]: this.hours,
      [SlotBookData.minutesFieldName]: this.minutes,
    };
  }

  static fromDbJson(json: any): SlotBookData {
    const day = dayjs(json[SlotBookData.bookingDateFieldName]);

    return new SlotBookData(
      json[SlotBookData.userIdFieldName],
      day,
      json[SlotBookData.hoursFieldName],
      json[SlotBookData.minutesFieldName],
    );
  }

  static dayStringFromDate(date: Dayjs): string {
    return date.format(SlotBookData.dayFormat);
  }
}

export { SlotBookData };
