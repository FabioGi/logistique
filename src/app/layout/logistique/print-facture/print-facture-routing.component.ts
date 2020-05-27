import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrintFacturesComponent } from './print-factures.component';

const routes: Routes = [
  {
    path: '',
    component:  PrintFacturesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrintFactureRoutingModule { }
