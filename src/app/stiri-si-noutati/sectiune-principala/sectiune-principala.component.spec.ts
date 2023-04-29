import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectiunePrincipalaComponent } from './sectiune-principala.component';

describe('SectiunePrincipalaComponent', () => {
  let component: SectiunePrincipalaComponent;
  let fixture: ComponentFixture<SectiunePrincipalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectiunePrincipalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectiunePrincipalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
