import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaContribuabiluluiComponent } from './carta-contribuabilului.component';

describe('CartaContribuabiluluiComponent', () => {
  let component: CartaContribuabiluluiComponent;
  let fixture: ComponentFixture<CartaContribuabiluluiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaContribuabiluluiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaContribuabiluluiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
