import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributiiHomeComponent } from './contributii-home.component';

describe('ContributiiHomeComponent', () => {
  let component: ContributiiHomeComponent;
  let fixture: ComponentFixture<ContributiiHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContributiiHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContributiiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
