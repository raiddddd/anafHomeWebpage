import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineSpvComponent } from './define-spv.component';

describe('DefineSpvComponent', () => {
  let component: DefineSpvComponent;
  let fixture: ComponentFixture<DefineSpvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefineSpvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefineSpvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
