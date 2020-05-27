import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material';
import { MatFormFieldModule, MatPaginatorModule,
        MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecuPrintComponent } from './recu-print.component';
import { RecuPrintRoutingModule } from './recu-print.routing';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  declarations: [RecuPrintComponent],
  imports: [
    CommonModule,
    RecuPrintRoutingModule,
    NgxQRCodeModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    FlexLayoutModule,
    MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: []
})
export class RecuPrintModule { }
