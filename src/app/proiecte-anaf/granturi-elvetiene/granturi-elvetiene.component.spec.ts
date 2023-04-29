import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GranturiElvetieneComponent } from './granturi-elvetiene.component';

describe('GranturiElvetieneComponent', () => {
  let component: GranturiElvetieneComponent;
  let fixture: ComponentFixture<GranturiElvetieneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GranturiElvetieneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GranturiElvetieneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
