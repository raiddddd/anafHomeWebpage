import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhidDeclaratiiAvereComponent } from './ghid-declaratii-avere.component';

describe('GhidDeclaratiiAvereComponent', () => {
  let component: GhidDeclaratiiAvereComponent;
  let fixture: ComponentFixture<GhidDeclaratiiAvereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhidDeclaratiiAvereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GhidDeclaratiiAvereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
