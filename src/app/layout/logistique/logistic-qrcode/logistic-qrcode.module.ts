import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogisticQrcodeRoutingModule } from './logistic-qrcode-routing.module';
import { LogisticQrcodeComponent } from './logistic-qrcode.component';
// import { NgxQRCodeModule } from 'ngx-qrcode2';
import { MatTableModule, MatFormFieldModule, MatPaginatorModule,
  MatInputModule, MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [LogisticQrcodeComponent],
  imports: [
    CommonModule,
    LogisticQrcodeRoutingModule,
   // NgxQRCodeModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    FlexLayoutModule,
    MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule
  ]
})
export class LogisticQrcodeModule { }
