import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-establishment-page',
  templateUrl: './add-establishment-page.component.html',
  styleUrls: ['./add-establishment-page.component.scss']
})
export class AddEstablishmentPageComponent implements OnInit {

  constructor(protected router: Router) { }

  ngOnInit() {
    if (!sessionStorage.getItem('AuthToken')) {
      this.router.navigate(['/login-page'])
    }
  }
}
