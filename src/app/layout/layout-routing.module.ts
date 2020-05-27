import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'charts',
                loadChildren: './charts/charts.module#ChartsModule'
            },
            {
                path: 'components',
                loadChildren:
                    './material-components/material-components.module#MaterialComponentsModule'
            },
            {
                path: 'forms',
                loadChildren: './forms/forms.module#FormsModule'
            },
            {
                path: 'grid',
                loadChildren: './grid/grid.module#GridModule'
            },
            {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule'
            },
            {
                path: 'blank-page',
                loadChildren: './blank-page/blank-page.module#BlankPageModule'
            },
            {
                path: 'logistic',
                loadChildren: './logistique/logistique.module#LogistiqueModule'
            },
            {
                path: 'logistic-form',
                loadChildren: './logistique/logistic-form/logistic-form.module#LogisticFormModule'
            },
            {
                path: 'logistic-code',
                loadChildren: './logistique/logistic-qrcode/logistic-qrcode.module#LogisticQrcodeModule'
            },
            {
                path: 'facture/:id',
                loadChildren: './logistique/factures/factures.module#FacturesModule'
            },
            {
                path: 'print-facture/:id',
                loadChildren: './logistique/print-facture/print-factures.module#PrintFacturesModule'
            },
            {
                path: 'recu/:id',
                loadChildren: './logistique/recu/recu.module#RecuModule'
            },
            {
                path: 'print-recu/:id',
                loadChildren: './logistique/recu-print/recu-print.module#RecuPrintModule'
            },

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
