import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObligatiiHomeComponent } from './obligatii-home/obligatii-home.component';

const routes: Routes = [
  { path: '', component: ObligatiiHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObligatiiRoutingModule { }
