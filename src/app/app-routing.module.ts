import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'contributii', loadChildren: () => import('./contributii/contributii.module').then((m)=> m.ContributiiModule) },
  { path: 'obligatii', loadChildren: () => import('./obligatii/obligatii.module').then((m)=> m.ObligatiiModule) },
  { path: 'proiecte', loadChildren: () => import('./proiecte-anaf/proiecte-anaf.module').then((m)=>m.ProiecteANAFModule) },
  { path: 'servicii', loadChildren: () => import('./servicii-anaf/servicii-anaf.module').then((m) => m.ServiciiANAFModule) },
  { path:'stiri', loadChildren: () => import('./stiri-si-noutati/stiri-si-noutati.module').then((m)=>m.StiriSiNoutatiModule) },
  { path:'', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
