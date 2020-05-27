import { LogisticService } from './logistic.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogistiqueRoutingModule } from './logistique-routing.module';
import { LogistiqueComponent } from './logistique.component';
import { MatTableModule } from '@angular/material';
import { MatFormFieldModule, MatPaginatorModule,
        MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LogistiqueComponent],
  imports: [
    CommonModule,
    LogistiqueRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    FlexLayoutModule,
    MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [ LogisticService ],
  exports: []
})
export class LogistiqueModule { }
