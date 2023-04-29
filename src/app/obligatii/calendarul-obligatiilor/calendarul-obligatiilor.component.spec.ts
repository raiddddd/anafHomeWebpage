import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarulObligatiilorComponent } from './calendarul-obligatiilor.component';

describe('CalendarulObligatiilorComponent', () => {
  let component: CalendarulObligatiilorComponent;
  let fixture: ComponentFixture<CalendarulObligatiilorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarulObligatiilorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarulObligatiilorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
