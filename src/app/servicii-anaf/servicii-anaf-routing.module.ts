import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiciiAnafHomeComponent } from './servicii-anaf-home/servicii-anaf-home.component';

const routes: Routes = [
  { path: '', component: ServiciiAnafHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciiANAFRoutingModule { }
