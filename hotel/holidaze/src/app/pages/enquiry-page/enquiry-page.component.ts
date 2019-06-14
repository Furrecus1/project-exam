import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enquiry-page',
  templateUrl: './enquiry-page.component.html',
  styleUrls: ['./enquiry-page.component.scss']
})
export class EnquiryPageComponent implements OnInit {

  constructor(protected router: Router) { }

  ngOnInit() {
    if (!sessionStorage.getItem('AuthToken')) {
      this.router.navigate(['/login-page'])
    }
  }

}
