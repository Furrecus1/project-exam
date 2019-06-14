import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEstablishmentPageComponent } from './add-establishment-page.component';

describe('AddEstablishmentPageComponent', () => {
  let component: AddEstablishmentPageComponent;
  let fixture: ComponentFixture<AddEstablishmentPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEstablishmentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEstablishmentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
