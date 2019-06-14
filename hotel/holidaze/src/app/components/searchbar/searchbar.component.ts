import { Component, OnInit } from '@angular/core';
import { AccomodationsService } from '../../services/accomodations.service';



@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  accommodations;
  public showDropDown = false;

  constructor(private data: AccomodationsService) {  }
 

  ngOnInit() {
    this.data.getAccommodationsService()
    .subscribe(res => {this.accommodations = res});
    
  }

  toggleDropDown() {
    this.showDropDown = !this.showDropDown;
  }
  onClickedOutside(e: Event) {
    if(this.showDropDown === true) {
      this.showDropDown = false;
    }
    
  }

  keydownInput(){
    this.showDropDown = true;
  }

 }

