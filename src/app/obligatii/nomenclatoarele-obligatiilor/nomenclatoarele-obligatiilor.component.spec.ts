import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomenclatoareleObligatiilorComponent } from './nomenclatoarele-obligatiilor.component';

describe('NomenclatoareleObligatiilorComponent', () => {
  let component: NomenclatoareleObligatiilorComponent;
  let fixture: ComponentFixture<NomenclatoareleObligatiilorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomenclatoareleObligatiilorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NomenclatoareleObligatiilorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
