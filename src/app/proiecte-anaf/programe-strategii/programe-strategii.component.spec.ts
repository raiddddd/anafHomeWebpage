import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrameStrategiiComponent } from './programe-strategii.component';

describe('ProgrameStrategiiComponent', () => {
  let component: ProgrameStrategiiComponent;
  let fixture: ComponentFixture<ProgrameStrategiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrameStrategiiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrameStrategiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
