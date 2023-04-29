import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlContainer } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { IntroComponent } from './home/intro/intro.component';
import { SectiuniPrincipaleComponent } from './home/sectiuni-principale/sectiuni-principale.component';
import { ExtraInfoComponent } from './home/extra-info/extra-info.component';
import { SubsolComponent } from './subsol/subsol.component';
import { TrimiteriSubsolComponent } from './subsol/trimiteri-subsol/trimiteri-subsol.component';
import { LogoFinanteComponent } from './subsol/logo-finante/logo-finante.component';
import { DivuriCaruselComponent } from './home/extra-info/divuri-carusel/divuri-carusel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    IntroComponent,
    SectiuniPrincipaleComponent,
    ExtraInfoComponent,
    SubsolComponent,
    TrimiteriSubsolComponent,
    LogoFinanteComponent,
    DivuriCaruselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
