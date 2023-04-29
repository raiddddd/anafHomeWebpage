import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProiecteAnafHomeComponent } from './proiecte-anaf-home.component';

describe('ProiecteAnafHomeComponent', () => {
  let component: ProiecteAnafHomeComponent;
  let fixture: ComponentFixture<ProiecteAnafHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProiecteAnafHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProiecteAnafHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
