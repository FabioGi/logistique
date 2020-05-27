import { Component, OnInit } from '@angular/core';
import { LogisticService } from '../logistic.service';

@Component({
  selector: 'app-logistic-qrcode',
  templateUrl: './logistic-qrcode.component.html',
  styleUrls: ['./logistic-qrcode.component.scss']
})
export class LogisticQrcodeComponent implements OnInit {
  // qrdata = 'yes';
  ngxQrcode2 = null;
  clients: any[];
  constructor( private bs: LogisticService ) { }


  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          //........Customized style.......
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
}

  ngOnInit() {
    this.bs
    .getColis()
    .subscribe((data: any[]) => {
      this.clients = data;
      console.log(data);
      this.ngxQrcode2 = 'nom: ' + data[0].nom_client + 'prenom:' + data[0].prenom_client ;
    });
  }

}
