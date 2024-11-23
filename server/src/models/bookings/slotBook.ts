import { SlotBookData } from './slotBookData';

class SlotBook {
  static readonly collectionName = 'bookings';
  slotId: string;

  data: SlotBookData;

  constructor(slotId: string, data: SlotBookData) {
    this.slotId = slotId;
    this.data = data;
  }

  static fromFirebaseDoc(doc: any): SlotBook {
    if (!doc || !doc.id || !doc.data) {
      throw new Error('Invalid Firebase doc');
    }

    const data = SlotBookData.fromDbJson(doc.data());
    return new SlotBook(doc.id, data);
  }
}

export { SlotBook };
