import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxeCodFiscalComponent } from './taxe-cod-fiscal.component';

describe('TaxeCodFiscalComponent', () => {
  let component: TaxeCodFiscalComponent;
  let fixture: ComponentFixture<TaxeCodFiscalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxeCodFiscalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxeCodFiscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
