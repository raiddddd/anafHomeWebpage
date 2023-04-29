import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObligatiiRoutingModule } from './obligatii-routing.module';
import { ObligatiiHomeComponent } from './obligatii-home/obligatii-home.component';
import { IntroObligatiiComponent } from './intro-obligatii/intro-obligatii.component';
import { CuprinsComponent } from './cuprins/cuprins.component';
import { ContextFiscalComponent } from './context-fiscal/context-fiscal.component';
import { CartaContribuabiluluiDoiComponent } from './carta-contribuabilului-doi/carta-contribuabilului-doi.component';
import { CalendarulObligatiilorComponent } from './calendarul-obligatiilor/calendarul-obligatiilor.component';
import { ToateFormulareleComponent } from './toate-formularele/toate-formularele.component';
import { NomenclatoareleObligatiilorComponent } from './nomenclatoarele-obligatiilor/nomenclatoarele-obligatiilor.component';
import { GhidDeclaratiiAvereComponent } from './ghid-declaratii-avere/ghid-declaratii-avere.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ObligatiiHomeComponent,
    IntroObligatiiComponent,
    CuprinsComponent,
    ContextFiscalComponent,
    CartaContribuabiluluiDoiComponent,
    CalendarulObligatiilorComponent,
    ToateFormulareleComponent,
    NomenclatoareleObligatiilorComponent,
    GhidDeclaratiiAvereComponent
  ],
  imports: [
    CommonModule,
    ObligatiiRoutingModule,
    SharedModule
  ],
  exports: []
})
export class ObligatiiModule { }
