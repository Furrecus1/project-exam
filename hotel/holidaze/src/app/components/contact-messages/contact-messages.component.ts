import { Component, OnInit } from '@angular/core';
import { ContactMessagesService } from '../../services/contact-messages.service';

@Component({
  selector: 'app-contact-messages',
  templateUrl: './contact-messages.component.html',
  styleUrls: ['./contact-messages.component.scss']
})
export class ContactMessagesComponent implements OnInit {

  messages;
  today: number = Date.now();

  constructor(private data: ContactMessagesService) { }

  ngOnInit() {
    this.data.getContactMessagesService()
    .subscribe(res => this.messages = res);
  }

}
