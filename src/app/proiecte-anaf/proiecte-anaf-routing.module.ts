import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProiecteAnafHomeComponent } from './proiecte-anaf-home/proiecte-anaf-home.component';

const routes: Routes = [
  { path: '', component: ProiecteAnafHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProiecteANAFRoutingModule { }
