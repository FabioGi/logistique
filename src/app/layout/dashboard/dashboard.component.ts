import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
    code_barre: string;
    designation: string;
    prix: number;
    statut: string;
    quantite: number;
    client: string;
    destinataire: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    // tslint:disable-next-line:max-line-length
    { code_barre: '1546BC', designation: 'Sac de cacao', prix: 15000, statut: 'Livre', quantite: 3, client: 'Kadio', destinataire: 'Olivier'  },
    // tslint:disable-next-line:max-line-length
    { code_barre: '6523AH', designation: 'Tomade KG', prix: 25000, statut: 'En cours', quantite: 3, client: 'Kadio', destinataire: 'Keyla'  },
    // tslint:disable-next-line:max-line-length
    { code_barre: '78oixC', designation: 'Medicaments', prix: 150000, statut: 'retire', quantite: 3, client: 'Kadio', destinataire: 'Agnes'  },
    // { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    // { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    // { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    // { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' }
];

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    displayedColumns = ['code_barre', 'designation', 'prix', 'statut', 'quantite', 'client', 'destinataire'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
    places: Array<any> = [];

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

    constructor() {
        this.places = [
            {
                imgSrc: 'assets/images/stim.png',
                place: 'Entrepot de lome',
                description:
                    // tslint:disable-next-line:max-line-length
                    'description',
                charge: 'capacite a decrire',
                location: 'Lome, Togo'
            },
            {
                imgSrc: 'assets/images/card-2.jpg',
                place: 'Entrepot de dakar',
                description:
                    // tslint:disable-next-line:max-line-length
                    'description',
                charge: 'capacite',
                location: 'Dakar, Senegal'
            },
            {
                imgSrc: 'assets/images/card-3.jpg',
                place: 'Entrepot de cotonou',
                description:
                    // tslint:disable-next-line:max-line-length
                    'Description',
                charge: 'capacite',
                location: 'Cotonou, Benin'
            }
        ];
    }

    ngOnInit() {}
}
