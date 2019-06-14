import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public showDropDown = false;
  public hamburgerIcon = true;
  public screenWidth = window.innerWidth;
  

  constructor() { }

  ngOnInit() {
    if(innerWidth > 780){
      this.showDropDown = true;
      this.hamburgerIcon = false;
    } else {
      this.hamburgerIcon = true;
     
    }
  }
  toggleDropDown() {
    this.showDropDown = !this.showDropDown;
  }
  onClickedOutside(e: Event) {
    if(this.showDropDown === true && innerWidth < 820) {
      this.showDropDown = false;
    }
  }
  toggleOff() {
    if(innerWidth < 820) {
      this.showDropDown = false;
    }
   
  }
 
  tabletSize(event) {
    if(event.target.innerWidth > 820){
      this.showDropDown = true;
      this.hamburgerIcon = false;
    } else {
      this.hamburgerIcon = true;
      this.showDropDown = false;
    }
   
  }
  
 

}
