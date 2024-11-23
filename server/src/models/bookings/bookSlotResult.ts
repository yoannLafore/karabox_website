export class BookSlotResult {
  readonly success: boolean;
  readonly message: string;

  constructor(success: boolean, message: string) {
    this.success = success;
    this.message = message;
  }

  static success(): BookSlotResult {
    return new BookSlotResult(true, 'Slot booked successfully');
  }

  static fail(message: string): BookSlotResult {
    return new BookSlotResult(false, message);
  }

  toJson(): any {
    return {
      success: this.success,
      message: this.message,
    };
  }
}
