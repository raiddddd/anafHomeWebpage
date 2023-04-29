import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextFiscalComponent } from './context-fiscal.component';

describe('ContextFiscalComponent', () => {
  let component: ContextFiscalComponent;
  let fixture: ComponentFixture<ContextFiscalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContextFiscalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContextFiscalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
