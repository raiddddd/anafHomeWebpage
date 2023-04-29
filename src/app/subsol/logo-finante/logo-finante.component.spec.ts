import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoFinanteComponent } from './logo-finante.component';

describe('LogoFinanteComponent', () => {
  let component: LogoFinanteComponent;
  let fixture: ComponentFixture<LogoFinanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoFinanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoFinanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
