import { Component, OnInit, ViewChild  } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import Business from '../../Business';
import { LogisticService } from '../logistique/logistic.service';
export interface Logistic {
  num_colis: string;
  client: string;
  nature_colis: string;
  quantite: number;
  statut: string;
  valeur_pqts: number;
  frais_mg_dep: number;
  frais_mg_dest: number;
  frais_route: number;
  destinataire: string;
  info: string;
}




@Component({
  selector: 'app-logistique',
  templateUrl: './logistique.component.html',
  styleUrls: ['./logistique.component.scss']
})
export class LogistiqueComponent implements OnInit {
  displayedColumns = ['identifiant', 'client',
                      'statut', 'frais depart', 'frais dest', 'destinataire', 'totale', 'info', 'details'];
    dataSource: MatTableDataSource<Logistic>;
    businesses: Business[];

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    logistic: any[];

    constructor(private bs: LogisticService) {
    }

    ngOnInit() {

        this.bs
        .getColis()
        .subscribe((data: any[]) => {
          this.logistic = data;
          this.dataSource = new MatTableDataSource(data) ;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });

        this.bs.getParam().subscribe((data) => {
          console.log(data[0].parameter);
        });
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

}



