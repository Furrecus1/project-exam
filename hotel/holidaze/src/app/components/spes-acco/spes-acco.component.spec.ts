import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpesAccoComponent } from './spes-acco.component';

describe('SpesAccoComponent', () => {
  let component: SpesAccoComponent;
  let fixture: ComponentFixture<SpesAccoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpesAccoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpesAccoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
