import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StiriSiNoutatiRoutingModule } from './stiri-si-noutati-routing.module';
import { StiriHomeComponent } from './stiri-home/stiri-home.component';
import { SectiuneCategoriiComponent } from './sectiune-categorii/sectiune-categorii.component';
import { SectiunePrincipalaComponent } from './sectiune-principala/sectiune-principala.component';
import { SectiuneTrimiteriComponent } from './sectiune-trimiteri/sectiune-trimiteri.component';


@NgModule({
  declarations: [
    StiriHomeComponent,
    SectiuneCategoriiComponent,
    SectiunePrincipalaComponent,
    SectiuneTrimiteriComponent
  ],
  imports: [
    CommonModule,
    StiriSiNoutatiRoutingModule
  ],
  exports: []
})
export class StiriSiNoutatiModule { }
