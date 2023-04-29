import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciiAnafHomeComponent } from './servicii-anaf-home.component';

describe('ServiciiAnafHomeComponent', () => {
  let component: ServiciiAnafHomeComponent;
  let fixture: ComponentFixture<ServiciiAnafHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciiAnafHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciiAnafHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
