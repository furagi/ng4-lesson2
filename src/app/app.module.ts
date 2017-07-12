import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { MailComponent } from './mail/mail.component';
import { ReceiptTimePipe } from './receipt-time.pipe';
import { MailsService } from './mails.service';

@NgModule({
  declarations: [
    AppComponent,
    MailBoxComponent,
    MailComponent,
    ReceiptTimePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [MailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
