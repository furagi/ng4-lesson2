import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/distinctUntilChanged';

import { Observable } from 'rxjs/Observable';

import { Mail } from './mail';

const MAILS: Mail[] = [{
  from: '1@com',
  title: 'test1',
  body: 'here I am'
}, {
  from: '2@com',
  body: 'very important mail'
}];

@Injectable()
export class MailsService {
  private _counter = 2;
  private _mails$$: BehaviorSubject<Mail[]>;
  constructor() {
    this._mails$$ = new BehaviorSubject(MAILS);
    setInterval(() => {
      this._counter++;
      const from = `${this._counter}@com`;
      const mail: Mail = {
        from,
        body: `Mail from ${from}`
      };
      if ((this._counter % 2) === 1) {
        mail.title = 'important mail';
      } else {
        mail.title = 'just usual mail';
      }
      MAILS.push(mail);
      this._mails$$.next(MAILS);
    }, 3000);
  }

  all() {
    return this._mails$$.asObservable().distinctUntilChanged();
  }

  remove(mail: Mail) {
    const index = MAILS.indexOf(mail);
    MAILS.splice(index, 1);
    this._mails$$.next(MAILS);
  }

}
