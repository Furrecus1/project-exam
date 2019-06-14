import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEstablishmentSuccessPageComponent } from './add-establishment-success-page.component';

describe('AddEstablishmentSuccessPageComponent', () => {
  let component: AddEstablishmentSuccessPageComponent;
  let fixture: ComponentFixture<AddEstablishmentSuccessPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEstablishmentSuccessPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEstablishmentSuccessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
