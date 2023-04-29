import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StiriHomeComponent } from './stiri-home.component';

describe('StiriHomeComponent', () => {
  let component: StiriHomeComponent;
  let fixture: ComponentFixture<StiriHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StiriHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StiriHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
