import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubTitleComponent } from './sub-title/sub-title.component';
import { SubtitluSharedComponent } from './subtitlu-shared/subtitlu-shared.component';
import { ButtonStandardComponent } from './button-standard/button-standard.component';



@NgModule({
  declarations: [
    SubTitleComponent,
    SubtitluSharedComponent,
    ButtonStandardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [SubTitleComponent,
  SubtitluSharedComponent,
  ButtonStandardComponent]
})
export class SharedModule { }
