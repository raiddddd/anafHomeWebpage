import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformatiiBirocraticeComponent } from './informatii-birocratice.component';

describe('InformatiiBirocraticeComponent', () => {
  let component: InformatiiBirocraticeComponent;
  let fixture: ComponentFixture<InformatiiBirocraticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformatiiBirocraticeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformatiiBirocraticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
