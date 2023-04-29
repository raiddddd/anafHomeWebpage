import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategieAnticoruptieComponent } from './strategie-anticoruptie.component';

describe('StrategieAnticoruptieComponent', () => {
  let component: StrategieAnticoruptieComponent;
  let fixture: ComponentFixture<StrategieAnticoruptieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrategieAnticoruptieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrategieAnticoruptieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
