import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecuPrintComponent } from './recu-print.component';

const routes: Routes = [
  {
    path: '',
    component: RecuPrintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  RecuPrintRoutingModule { }
