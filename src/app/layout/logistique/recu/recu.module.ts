import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';
import { MatFormFieldModule, MatPaginatorModule,
        MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { RecuRoutingModule } from './recu.routing';
import { RecuComponent } from './recu.component';


@NgModule({
  declarations: [RecuComponent],
  imports: [
    CommonModule,
    RecuRoutingModule,
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
export class RecuModule { }
