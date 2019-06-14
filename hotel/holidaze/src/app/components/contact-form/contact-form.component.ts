import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  
  public nameError = false;
  public emailError = false;
  public messageError = false;
  
  constructor() { }

  ngOnInit() {
  }
  nameValidation() {
    var nerror = document.forms["myForm"]["clientName"].value;
    if(nerror == "") {
      this.nameError = true;
    } else {
      this.nameError = false;
    }
  }
  emailValidation() {
    var eerror = document.forms["myForm"]["email"].value;
    if(eerror == "") {
      this.emailError = true;
    } else {
      this.emailError = false;
    }
  }
  messageValidation() {
    var merror = document.forms["myForm"]["message"].value;
    if(merror == "") {
      this.messageError = true;
    } else {
      this.messageError = false;
    }
  }
  formValidation() {
    var nerror = document.forms["myForm"]["clientName"].value;
    var eerror = document.forms["myForm"]["email"].value;
    var merror = document.forms["myForm"]["message"].value;
    if(nerror == "") {
      this.nameError = true;
      return false;
    }
    if(eerror == "") {
      this.emailError = true;
      return false;
    }
    if(merror == "") {
      this.messageError = true;
      return false;
    }
  }
}
