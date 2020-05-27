import { Component, OnInit, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import { LogisticService } from '../../logistique/logistic.service';

@Component({
    selector: 'app-topnav',
    templateUrl: './topnav.component.html',
    styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
    public pushRightClass: string;

    constructor(public router: Router,
         private translate: TranslateService,
         public dialog: MatDialog) {
        this.router.events.subscribe(val => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.pushRightClass = 'push-right';
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
        this.router.navigate(['/login']);
    }

    changeLang(language: string) {
        this.translate.use(language);
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogParameter, {
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
    selector: 'app-dialog-parameter',
    templateUrl: 'dialog-parameter.html',
    styleUrls: ['./dialog-parameter.css']
  })
  export class DialogParameter implements OnInit {

    genres: any;
    isgenre = false;
    param: any;

    constructor(
      private router: Router,
      private bs: LogisticService,
      public dialogRef: MatDialogRef<DialogParameter>,
      @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

    ngOnInit() {
        this.bs.getParam().subscribe((data) => {
            this.param = data[0].parameter;
          });
    }

    onSubmit(data) {
            this.bs.updateParam(data.value.parameter);
            this.dialogRef.close();
    }
  }




