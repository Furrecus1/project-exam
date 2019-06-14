import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-messages-page',
  templateUrl: './contact-messages-page.component.html',
  styleUrls: ['./contact-messages-page.component.scss']
})
export class ContactMessagesPageComponent implements OnInit {

  constructor(protected router: Router) { }

  ngOnInit() {
    if (!sessionStorage.getItem('AuthToken')) {
      this.router.navigate(['/login-page'])
    }
  }
}
