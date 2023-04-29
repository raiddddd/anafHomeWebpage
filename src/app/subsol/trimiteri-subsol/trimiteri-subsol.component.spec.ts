import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrimiteriSubsolComponent } from './trimiteri-subsol.component';

describe('TrimiteriSubsolComponent', () => {
  let component: TrimiteriSubsolComponent;
  let fixture: ComponentFixture<TrimiteriSubsolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrimiteriSubsolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrimiteriSubsolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
