import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'receiptTime'
})
export class ReceiptTimePipe implements PipeTransform {

  transform(value: number, args?: any): string {
    const passed = Date.now() - value;
    let nextDigit = 1000;
    if (passed < nextDigit) {
      return `${passed} milliseconds`;
    }
    nextDigit *= 60;
    if (passed < nextDigit) {
      return `${ Math.floor(passed * 60 / nextDigit)} seconds`;
    }
    nextDigit *= 60;
    if (passed < nextDigit) {
      return `${ Math.floor(passed * 60 / nextDigit)} minutes`;
    }
    nextDigit *= 60;
    if (passed < nextDigit) {
      return `${ Math.floor(passed * 60 / nextDigit)} hours`;
    }
    nextDigit *= 24;
    if (passed < nextDigit) {
      return `${ Math.floor(passed * 24 / nextDigit)} days`;
    }
    if (passed < nextDigit * 7) {
      return `${ Math.floor(passed / nextDigit)} weeks`;
    }
    if (passed < nextDigit * 30) {
      return `${ Math.floor(passed / nextDigit)} months`;
    }
    return `${ Math.floor(passed / ( nextDigit * 365 )) } years`;
  }

}
