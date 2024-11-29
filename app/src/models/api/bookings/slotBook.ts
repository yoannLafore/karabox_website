import { SlotBookData } from './slotBookData';

class SlotBook {
  static readonly collectionName = 'bookings';
  slotId: string;

  data: SlotBookData;

  constructor(slotId: string, data: SlotBookData) {
    this.slotId = slotId;
    this.data = data;
  }

  static fromApiResponse(res: any): SlotBook {
    const data = SlotBookData.fromDbJson(res.data);
    return new SlotBook(res.id, data);
  }
}

export { SlotBook };
