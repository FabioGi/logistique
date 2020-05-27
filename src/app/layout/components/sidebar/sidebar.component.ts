import { Component, OnInit, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LogisticService } from '../../logistique/logistic.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    public showMenu: string;
    constructor( public dialog: MatDialog) {}

    ngOnInit() {
        this.showMenu = '';
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    openDialog(reduction: boolean): void {
        const dialogRef = this.dialog.open( DialogFacture, {
          width: '550px',
          data: {
              key: 'key',
              reduction: reduction
           }
        });

        dialogRef.afterClosed().subscribe(result => {
        });
      }

      openDialogRecu(): void {
        const dialogRef = this.dialog.open(DialogRecu, {
          width: '550px',
          data: {
              key: 'key'
           }
        });

        dialogRef.afterClosed().subscribe(result => {
        });
      }
}

@Component({
    selector: 'app-dialog-facture',
    templateUrl: 'dialog-facture.html',
    styleUrls: ['./dialog-facture.css']
  })
  export class DialogFacture implements OnInit {

    genres: any;
    isgenre = false;
    param: any;
    reduction: boolean;

    constructor(
      private router: Router,
      private bs: LogisticService,
      public dialogRef: MatDialogRef<DialogFacture>,
      @Inject(MAT_DIALOG_DATA) public data: any) {
        this.reduction = data.reduction ;
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

    ngOnInit() {
    }

    onSubmit(data) {
        this.router.navigate(['/facture/' + data.value.parameter]);
        this.dialogRef.close();
    }
  }


  @Component({
    selector: 'app-dialog-recu',
    templateUrl: 'dialog-recu.html',
    styleUrls: ['./dialog-recu.scss']
  })
  export class DialogRecu implements OnInit {

    genres: any;
    isgenre = false;
    param: any;

    constructor(
      private router: Router,
      private bs: LogisticService,
      public dialogRef: MatDialogRef<DialogRecu>,
      @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

    ngOnInit() {
    }

    onSubmit(data) {
        this.router.navigate(['/print-recu/' + data.value.parameter]);
        this.dialogRef.close();
    }
  }
