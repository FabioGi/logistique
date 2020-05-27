import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogisticFormRoutingModule } from './logistic-form-routing.module';
import { LogisticFormComponent } from './logistic-form.component';
import { MatTableModule } from '@angular/material';
import { MatFormFieldModule, MatPaginatorModule,
        MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { NgxQRCodeModule } from 'ngx-qrcode2';


@NgModule({
  declarations: [LogisticFormComponent],
  imports: [
    CommonModule,
    LogisticFormRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    FlexLayoutModule,
    MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule,
    FormsModule, ReactiveFormsModule, MatSelectModule,
    NgxQRCodeModule
  ]
})
export class LogisticFormModule { }
