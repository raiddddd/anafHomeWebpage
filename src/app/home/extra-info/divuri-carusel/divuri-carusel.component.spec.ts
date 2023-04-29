import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivuriCaruselComponent } from './divuri-carusel.component';

describe('DivuriCaruselComponent', () => {
  let component: DivuriCaruselComponent;
  let fixture: ComponentFixture<DivuriCaruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivuriCaruselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivuriCaruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
