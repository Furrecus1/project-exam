import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpesAccommodationsPageComponent } from './spes-accommodations-page.component';

describe('SpesAccommodationsPageComponent', () => {
  let component: SpesAccommodationsPageComponent;
  let fixture: ComponentFixture<SpesAccommodationsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpesAccommodationsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpesAccommodationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
