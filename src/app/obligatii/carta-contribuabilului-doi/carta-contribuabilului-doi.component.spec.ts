import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaContribuabiluluiDoiComponent } from './carta-contribuabilului-doi.component';

describe('CartaContribuabiluluiDoiComponent', () => {
  let component: CartaContribuabiluluiDoiComponent;
  let fixture: ComponentFixture<CartaContribuabiluluiDoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaContribuabiluluiDoiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaContribuabiluluiDoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
