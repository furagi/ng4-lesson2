import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Mail } from '../mail';
import { MailsService } from '../mails.service';

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.css']
})
export class MailBoxComponent implements OnInit {
  mails: Observable<Mail[]>;

  constructor(private _mails: MailsService) {
    this.mails = this._mails.all();
  }

  ngOnInit() {
  }

}
