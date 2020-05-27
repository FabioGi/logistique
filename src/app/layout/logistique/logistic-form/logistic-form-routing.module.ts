import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogisticFormComponent } from './logistic-form.component';

const routes: Routes = [
  {
    path: '',
    component: LogisticFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogisticFormRoutingModule { }
