import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroProiecteComponent } from './intro-proiecte.component';

describe('IntroProiecteComponent', () => {
  let component: IntroProiecteComponent;
  let fixture: ComponentFixture<IntroProiecteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroProiecteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroProiecteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
