import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageSuccessPageComponent } from './message-success-page.component';

describe('MessageSuccessPageComponent', () => {
  let component: MessageSuccessPageComponent;
  let fixture: ComponentFixture<MessageSuccessPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageSuccessPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageSuccessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
