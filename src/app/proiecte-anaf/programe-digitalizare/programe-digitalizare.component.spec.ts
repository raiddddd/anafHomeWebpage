import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrameDigitalizareComponent } from './programe-digitalizare.component';

describe('ProgrameDigitalizareComponent', () => {
  let component: ProgrameDigitalizareComponent;
  let fixture: ComponentFixture<ProgrameDigitalizareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrameDigitalizareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrameDigitalizareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
