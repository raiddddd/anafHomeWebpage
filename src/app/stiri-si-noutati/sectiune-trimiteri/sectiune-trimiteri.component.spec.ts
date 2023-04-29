import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectiuneTrimiteriComponent } from './sectiune-trimiteri.component';

describe('SectiuneTrimiteriComponent', () => {
  let component: SectiuneTrimiteriComponent;
  let fixture: ComponentFixture<SectiuneTrimiteriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectiuneTrimiteriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectiuneTrimiteriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
