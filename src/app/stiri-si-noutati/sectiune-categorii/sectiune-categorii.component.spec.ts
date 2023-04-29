import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectiuneCategoriiComponent } from './sectiune-categorii.component';

describe('SectiuneCategoriiComponent', () => {
  let component: SectiuneCategoriiComponent;
  let fixture: ComponentFixture<SectiuneCategoriiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectiuneCategoriiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectiuneCategoriiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
