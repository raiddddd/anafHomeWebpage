import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatiiInternationaleComponent } from './relatii-internationale.component';

describe('RelatiiInternationaleComponent', () => {
  let component: RelatiiInternationaleComponent;
  let fixture: ComponentFixture<RelatiiInternationaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatiiInternationaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatiiInternationaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
