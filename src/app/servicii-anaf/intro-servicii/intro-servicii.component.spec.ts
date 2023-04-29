import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroServiciiComponent } from './intro-servicii.component';

describe('IntroServiciiComponent', () => {
  let component: IntroServiciiComponent;
  let fixture: ComponentFixture<IntroServiciiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroServiciiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroServiciiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
