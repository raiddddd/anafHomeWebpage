import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnumeratiiComponent } from './enumeratii.component';

describe('EnumeratiiComponent', () => {
  let component: EnumeratiiComponent;
  let fixture: ComponentFixture<EnumeratiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnumeratiiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnumeratiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
