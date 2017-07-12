import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { Mail } from '../mail';
import { MailsService } from '../mails.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit, OnDestroy {

  @Input() mail: Mail;
  birthday: number;
  constructor(private _mails: MailsService) { }

  ngOnInit() {
    this.birthday = Date.now();
  }

  remove() {
    this._mails.remove(this.mail);
  }

  ngOnDestroy() {
    alert(Date.now() - this.birthday);
  }

}
