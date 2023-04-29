import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContributiiRoutingModule } from './contributii-routing.module';
import { ContributiiHomeComponent } from './contributii-home/contributii-home.component';
import { IntroContributiiComponent } from './intro-contributii/intro-contributii.component';
import { DefineSpvComponent } from './define-spv/define-spv.component';
import { TaxeCodFiscalComponent } from './taxe-cod-fiscal/taxe-cod-fiscal.component';
import { CartaContribuabiluluiComponent } from './carta-contribuabilului/carta-contribuabilului.component';
import { InformatiiBirocraticeComponent } from './informatii-birocratice/informatii-birocratice.component';
import { EnumeratiiComponent } from './taxe-cod-fiscal/enumeratii/enumeratii.component';
import { CarouselCardsComponent } from './informatii-birocratice/carousel-cards/carousel-cards.component';


@NgModule({
  declarations: [
    ContributiiHomeComponent,
    IntroContributiiComponent,
    DefineSpvComponent,
    TaxeCodFiscalComponent,
    CartaContribuabiluluiComponent,
    InformatiiBirocraticeComponent,
    EnumeratiiComponent,
    CarouselCardsComponent
  ],
  imports: [
    CommonModule,
    ContributiiRoutingModule
  ],
  exports: []
})
export class ContributiiModule { }
