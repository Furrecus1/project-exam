import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactMessagesService {

  constructor(private http: HttpClient) { }
  getContactMessagesService() {
    return this.http.get('./assets/data/contact.json')
  }
}
