import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmcsComponent } from './emcs.component';

describe('EmcsComponent', () => {
  let component: EmcsComponent;
  let fixture: ComponentFixture<EmcsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmcsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
