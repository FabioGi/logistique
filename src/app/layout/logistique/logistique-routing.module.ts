import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogistiqueComponent } from './logistique.component';

const routes: Routes = [
  {
    path: '',
    component: LogistiqueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogistiqueRoutingModule { }
