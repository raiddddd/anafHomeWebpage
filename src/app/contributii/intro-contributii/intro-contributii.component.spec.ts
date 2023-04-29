import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroContributiiComponent } from './intro-contributii.component';

describe('IntroContributiiComponent', () => {
  let component: IntroContributiiComponent;
  let fixture: ComponentFixture<IntroContributiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroContributiiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroContributiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
