import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectiuniPrincipaleComponent } from './sectiuni-principale.component';

describe('SectiuniPrincipaleComponent', () => {
  let component: SectiuniPrincipaleComponent;
  let fixture: ComponentFixture<SectiuniPrincipaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectiuniPrincipaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectiuniPrincipaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
