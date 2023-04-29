import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StiriHomeComponent } from './stiri-home/stiri-home.component';

const routes: Routes = [
  { path: '', component: StiriHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StiriSiNoutatiRoutingModule { }
