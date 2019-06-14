import { Component, OnInit } from '@angular/core';
import { AccomodationsService } from '../../services/accomodations.service';


@Component({
  selector: 'app-accommodations',
  templateUrl: './accommodations.component.html',
  styleUrls: ['./accommodations.component.scss']
})
export class AccommodationsComponent implements OnInit {

  accommodations;

  constructor(private data: AccomodationsService) { }

  ngOnInit() {
    this.data.getAccommodationsService()
    .subscribe(res => {this.accommodations = res});
    
  }

}


