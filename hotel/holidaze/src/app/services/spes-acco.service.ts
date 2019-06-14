import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class SpesAccoService {

  constructor(private http: HttpClient) { }
  getSpesAccoService() {
    return this.http.get('./assets/data/establishments.json')
  }
}
