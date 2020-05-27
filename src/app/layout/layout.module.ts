import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule
} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { SidebarComponent, DialogFacture, DialogRecu } from './components/sidebar/sidebar.component';
import { TopnavComponent, DialogParameter } from './components/topnav/topnav.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatListModule,
        TranslateModule,
        MatDialogModule,
        MatFormFieldModule,
        FormsModule, ReactiveFormsModule
    ],
    declarations: [LayoutComponent, NavComponent, TopnavComponent, SidebarComponent,
         DialogParameter, DialogFacture,  DialogRecu],
    exports: [],
    entryComponents: [DialogParameter, DialogFacture, DialogRecu]
})
export class LayoutModule {}
