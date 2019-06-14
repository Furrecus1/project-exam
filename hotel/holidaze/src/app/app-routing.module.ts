import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnquiryPageComponent } from './pages/enquiry-page/enquiry-page.component';
import { ContactMessagesPageComponent } from './pages/contact-messages-page/contact-messages-page.component';
import { AddEstablishmentPageComponent } from './pages/add-establishment-page/add-establishment-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AccommodationsPageComponent } from './pages/accommodations-page/accommodations-page.component';
import { SpesAccommodationsPageComponent } from './pages/spes-accommodations-page/spes-accommodations-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { MessageSuccessPageComponent } from './pages/message-success-page/message-success-page.component';
import { EnquirySuccessPageComponent } from './pages/enquiry-success-page/enquiry-success-page.component';
import { AddEstablishmentSuccessPageComponent } from './pages/add-establishment-success-page/add-establishment-success-page.component';

const routes: Routes = [
  { path: 'login-page', component: LoginPageComponent },
  { path: '', component: HomePageComponent },
  { path: 'accommodations-page', component: AccommodationsPageComponent },
  { path: 'spes-accommodations-page/:id', component: SpesAccommodationsPageComponent },
  { path: 'about-page', component: AboutPageComponent },
  { path: 'contact-page', component: ContactPageComponent },
  { path: 'enquiry-page', component: EnquiryPageComponent },
  { path: 'contact-messages-page', component: ContactMessagesPageComponent },
  { path: 'add-establishment-page', component: AddEstablishmentPageComponent },
  { path: 'message-success-page', component: MessageSuccessPageComponent },
  { path: 'enquiry-success-page', component: EnquirySuccessPageComponent },
  { path: 'add-establishment-success-page', component: AddEstablishmentSuccessPageComponent },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
