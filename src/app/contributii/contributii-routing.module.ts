import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContributiiHomeComponent } from './contributii-home/contributii-home.component';

const routes: Routes = [
  { path: '', component: ContributiiHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContributiiRoutingModule { }
