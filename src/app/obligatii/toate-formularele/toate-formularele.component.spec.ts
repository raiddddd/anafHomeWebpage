import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToateFormulareleComponent } from './toate-formularele.component';

describe('ToateFormulareleComponent', () => {
  let component: ToateFormulareleComponent;
  let fixture: ComponentFixture<ToateFormulareleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToateFormulareleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToateFormulareleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
