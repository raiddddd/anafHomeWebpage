import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ProiecteANAFRoutingModule } from './proiecte-anaf-routing.module';
import { ProiecteAnafHomeComponent } from './proiecte-anaf-home/proiecte-anaf-home.component';
import { IntroProiecteComponent } from './intro-proiecte/intro-proiecte.component';
import { CuprinsComponent } from './cuprins/cuprins.component';
import { ProgrameStrategiiComponent } from './programe-strategii/programe-strategii.component';
import { StrategieAnticoruptieComponent } from './strategie-anticoruptie/strategie-anticoruptie.component';
import { ProgrameDigitalizareComponent } from './programe-digitalizare/programe-digitalizare.component';
import { RelatiiInternationaleComponent } from './relatii-internationale/relatii-internationale.component';
import { GranturiElvetieneComponent } from './granturi-elvetiene/granturi-elvetiene.component';
import { EmcsComponent } from './emcs/emcs.component';


@NgModule({
  declarations: [
    ProiecteAnafHomeComponent,
    IntroProiecteComponent,
    CuprinsComponent,
    ProgrameStrategiiComponent,
    StrategieAnticoruptieComponent,
    ProgrameDigitalizareComponent,
    RelatiiInternationaleComponent,
    GranturiElvetieneComponent,
    EmcsComponent
  ],
  imports: [
    CommonModule,
    ProiecteANAFRoutingModule,
    SharedModule
  ],
  exports: []
})
export class ProiecteANAFModule { }
