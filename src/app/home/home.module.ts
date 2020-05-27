import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule } from '@angular/material';

import { HomeRoutingModule } from './home-routing.module';
import { StatModule } from '../shared/modules/stat/stat.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    StatModule,
    FlexLayoutModule
  ]
})
export class HomeModule { }
