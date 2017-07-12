import { ReceiptTimePipe } from './receipt-time.pipe';

describe('ReceiptTimePipe', () => {
  it('create an instance', () => {
    const pipe = new ReceiptTimePipe();
    expect(pipe).toBeTruthy();
  });
});
