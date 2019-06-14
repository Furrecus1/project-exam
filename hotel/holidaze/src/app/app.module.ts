import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AccommodationsPageComponent } from './pages/accommodations-page/accommodations-page.component';
import { AccommodationsComponent } from './components/accommodations/accommodations.component';
import { SpesAccommodationsPageComponent } from './pages/spes-accommodations-page/spes-accommodations-page.component';
import { FormsModule } from '@angular/forms';
import { LogInComponent } from './components/log-in/log-in.component';
import { EnquiryPageComponent } from './pages/enquiry-page/enquiry-page.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { EnquiriesComponent } from './components/enquiries/enquiries.component';
import { ContactMessagesComponent } from './components/contact-messages/contact-messages.component';
import { ContactMessagesPageComponent } from './pages/contact-messages-page/contact-messages-page.component';
import { EnquiryFormComponent } from './components/enquiry-form/enquiry-form.component';
import { AddEstablishmentPageComponent } from './pages/add-establishment-page/add-establishment-page.component';
import { AdminNavComponent } from './components/admin-nav/admin-nav.component';
import { AddEstablishmentComponent } from './components/add-establishment/add-establishment.component';
import { SpesAccoComponent } from './components/spes-acco/spes-acco.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';

import { ClickOutsideModule } from 'ng-click-outside';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MapsComponent } from './components/maps/maps.component';

import { AgmCoreModule } from '@agm/core';
import { FooterComponent } from './components/footer/footer.component';
import { MessageSuccessPageComponent } from './pages/message-success-page/message-success-page.component';
import { EnquirySuccessPageComponent } from './pages/enquiry-success-page/enquiry-success-page.component';
import { AddEstablishmentSuccessPageComponent } from './pages/add-establishment-success-page/add-establishment-success-page.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    LoginPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    AccommodationsPageComponent,
    AccommodationsComponent,
    SpesAccommodationsPageComponent,
    LogInComponent,
    EnquiryPageComponent,
    ContactFormComponent,
    EnquiriesComponent,
    ContactMessagesComponent,
    ContactMessagesPageComponent,
    EnquiryFormComponent,
    AddEstablishmentPageComponent,
    AdminNavComponent,
    AddEstablishmentComponent,
    SpesAccoComponent,
    SearchbarComponent,
    MapsComponent,
    FooterComponent,
    MessageSuccessPageComponent,
    EnquirySuccessPageComponent,
    AddEstablishmentSuccessPageComponent,
    
   
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ClickOutsideModule, 
    Ng2SearchPipeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC6idphh25nfszYIen8q9vQ5GgmdQ9gZLs'
    })
   
 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
