import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnquiriesService {

  constructor(private http: HttpClient) { }
  getEnquiriesService() {
    return this.http.get('./assets/data/enquiries.json')
  }
}
