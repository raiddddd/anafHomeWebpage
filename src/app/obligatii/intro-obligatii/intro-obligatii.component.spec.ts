import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroObligatiiComponent } from './intro-obligatii.component';

describe('IntroObligatiiComponent', () => {
  let component: IntroObligatiiComponent;
  let fixture: ComponentFixture<IntroObligatiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroObligatiiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroObligatiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
