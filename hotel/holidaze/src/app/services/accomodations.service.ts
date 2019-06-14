import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccomodationsService {

  constructor(private http: HttpClient) { }
  getAccommodationsService() {
    return this.http.get('./assets/data/establishments.json')
  }

}
