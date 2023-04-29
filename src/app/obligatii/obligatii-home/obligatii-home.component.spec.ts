import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObligatiiHomeComponent } from './obligatii-home.component';

describe('ObligatiiHomeComponent', () => {
  let component: ObligatiiHomeComponent;
  let fixture: ComponentFixture<ObligatiiHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObligatiiHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObligatiiHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
