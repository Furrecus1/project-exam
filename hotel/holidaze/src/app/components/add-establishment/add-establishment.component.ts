import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-establishment',
  templateUrl: './add-establishment.component.html',
  styleUrls: ['./add-establishment.component.scss']
})
export class AddEstablishmentComponent implements OnInit {
  public nameError = false;
  public emailError = false;
  public urlError = false;
  public priceError = false;
  public guestError = false;
  public latError = false;
  public longError = false;
  public descriptError = false;
  public idError = false;

  constructor() { }

  ngOnInit() {
  }

  nameValidation() {
    var nerror = document.forms["myForm"]["establishmentName"].value;
    if(nerror == "") {
      this.nameError = true;
    } else {
      this.nameError = false;
    }
  }
  emailValidation() {
    var eerror = document.forms["myForm"]["establishmentEmail"].value;
    if(eerror == "") {
      this.emailError = true;
    } else {
      this.emailError = false;
    }
  }
  urlValidation() {
    var ierror = document.forms["myForm"]["imageUrl"].value;
    if(ierror == "") {
      this.urlError = true;
    } else {
      this.urlError = false;
    }
  }
  priceValidation() {
    var perror = document.forms["myForm"]["price"].value;
    if(perror == "") {
      this.priceError = true;
    } else {
      this.priceError = false;
    }
  }
  guestValidation() {
    var gerror = document.forms["myForm"]["maxGuests"].value;
    if(gerror == "") {
      this.guestError = true;
    } else {
      this.guestError = false;
    }
  }
  latValidation() {
    var laterror = document.forms["myForm"]["googleLat"].value;
    if(laterror == "") {
      this.latError = true;
    } else {
      this.latError = false;
    }
  }
  longValidation() {
    var longerror = document.forms["myForm"]["googleLong"].value;
    if(longerror == "") {
      this.longError = true;
    } else {
      this.longError = false;
    }
  }
  descriptValidation() {
    var descripterror = document.forms["myForm"]["description"].value;
    if(descripterror == "") {
      this.descriptError = true;
    } else {
      this.descriptError = false;
    }
  }
  idValidation() {
    var iderror = document.forms["myForm"]["id"].value;
    if(iderror == "") {
      this.idError = true;
    } else {
      this.idError = false;
    }
  }
 
  formValidation() {
    var nerror = document.forms["myForm"]["establishmentName"].value;
    var eerror = document.forms["myForm"]["establishmentEmail"].value;
    var ierror = document.forms["myForm"]["imageUrl"].value;
    var perror = document.forms["myForm"]["price"].value;
    var gerror = document.forms["myForm"]["maxGuests"].value;
    var laterror = document.forms["myForm"]["googleLat"].value;
    var longerror = document.forms["myForm"]["googleLong"].value;
    var descripterror = document.forms["myForm"]["description"].value;
    var iderror = document.forms["myForm"]["id"].value;
  
    if(nerror == "") {
      this.nameError = true;
      return false;
    }
    if(eerror == "") {
      this.emailError = true;
      return false;
    }
    if(ierror == "") {
      this.urlError = true;
      return false;
    }
    if(perror == "") {
      this.priceError = true;
      return false;
    }
    if(gerror == "") {
      this.guestError = true;
      return false;
    }
    if(laterror == "") {
      this.latError = true;
      return false;
    }
    if(longerror == "") {
      this.longError = true;
      return false;
    }
    if(descripterror == "") {
      this.descriptError = true;
      return false;
    }
    if(iderror == "") {
      this.idError = true;
      return false;
    }
  }




}
