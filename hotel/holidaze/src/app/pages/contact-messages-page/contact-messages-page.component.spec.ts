import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMessagesPageComponent } from './contact-messages-page.component';

describe('ContactMessagesPageComponent', () => {
  let component: ContactMessagesPageComponent;
  let fixture: ComponentFixture<ContactMessagesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactMessagesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactMessagesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
