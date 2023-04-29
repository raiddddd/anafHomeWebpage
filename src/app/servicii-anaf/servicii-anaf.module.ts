import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciiANAFRoutingModule } from './servicii-anaf-routing.module';
import { ServiciiAnafHomeComponent } from './servicii-anaf-home/servicii-anaf-home.component';
import { IntroServiciiComponent } from './intro-servicii/intro-servicii.component';
import { ServiciiComponent } from './servicii/servicii.component';


@NgModule({
  declarations: [
    ServiciiAnafHomeComponent,
    IntroServiciiComponent,
    ServiciiComponent
  ],
  imports: [
    CommonModule,
    ServiciiANAFRoutingModule
  ],
  exports: []
})
export class ServiciiANAFModule { }
