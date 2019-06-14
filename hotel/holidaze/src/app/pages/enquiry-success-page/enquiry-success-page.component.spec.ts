import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquirySuccessPageComponent } from './enquiry-success-page.component';

describe('EnquirySuccessPageComponent', () => {
  let component: EnquirySuccessPageComponent;
  let fixture: ComponentFixture<EnquirySuccessPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnquirySuccessPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquirySuccessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
