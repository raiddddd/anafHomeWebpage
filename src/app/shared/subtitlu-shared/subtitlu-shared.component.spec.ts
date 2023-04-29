import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtitluSharedComponent } from './subtitlu-shared.component';

describe('SubtitluSharedComponent', () => {
  let component: SubtitluSharedComponent;
  let fixture: ComponentFixture<SubtitluSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubtitluSharedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubtitluSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
