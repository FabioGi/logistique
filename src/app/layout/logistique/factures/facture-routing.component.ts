import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacturesComponent } from './factures.component';

const routes: Routes = [
  {
    path: '',
    component:  FacturesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactureRoutingModule { }
