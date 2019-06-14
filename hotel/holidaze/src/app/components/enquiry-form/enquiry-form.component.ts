import { Component, OnInit } from '@angular/core';
import { SpesAccoService } from '../../services/spes-acco.service';
import { ActivatedRoute, Router } from'@angular/router';


@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.scss']
})
export class EnquiryFormComponent implements OnInit {
  accommodations;
  public accoID;
  public establishment;

  public nameError = false;
  public emailError = false;
  
  

  constructor(private data: SpesAccoService, private route: ActivatedRoute, protected router: Router) {}

  ngOnInit() {
    this.data.getSpesAccoService()
    .subscribe(res => {this.accommodations = res 
      let id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.accoID = id;
      const filteredEstablishments = this.accommodations.filter(establishments => establishments.id == id);
      this.establishment = filteredEstablishments[0];
     });
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
 
  formValidation() {
    var nerror = document.forms["myForm"]["clientName"].value;
    var eerror = document.forms["myForm"]["email"].value;
  
    if(nerror == "") {
      this.nameError = true;
      return false;
    }
    if(eerror == "") {
      this.emailError = true;
      return false;
    }
  }
}
