import { Component, OnInit } from '@angular/core';
import { LogisticService } from '../logistic.service';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';

@Component({
  selector: 'app-recu-print',
  templateUrl: './recu-print.component.html',
  styleUrls: ['./recu-print.component.scss']
})

export class RecuPrintComponent implements OnInit {
  facture: any;
  ngxQrcode2 = null;
  id: string;
  percentage: any;
  newTotale: number;
  endTotale: number;
  destMoney: any;
  addMoney: number;
  d: number;
  imgSrc = 'assets/images/stim.png';

  constructor(private bs: LogisticService,
              private route: ActivatedRoute, ) {}

  ngOnInit() {
    this.id  = this.route.snapshot.paramMap.get('id');
    this.bs
        .editFacture(this.id)
        .subscribe((data: any) => {
          this.facture = data;
          console.log(this.facture);
          this.ngxQrcode2 =  this.id + 'sitm';
        });
        this.d = Date.now();
  }

  print_page() {
    // window.print();
      let printContents, popupWin;
      printContents = document.getElementById('print-section').innerHTML;
      popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
      popupWin.document.open();
      popupWin.document.write(`
        <html>
          <head>
            <title>Print tab</title>
            <style>


            /*** @media all  ***/
            * {
              box-sizing: border-box;
            }
            // html {
            //   height: 100%;
            // }
            body {
              min-height: 100%;
              margin-top: 0px;
              display: flex;
              flex-flow: column nowrap;
              justify-content: center;
              align-items: sretch;
              font: 12pt/1.5 'Raleway', 'Cambria', sans-serif;
              font-weight: 300;
              background:white;
              color: #000;
              -webkit-print-color-adjust: exact;
            }
            header {
              padding: 16px;
              position: relative;
              color: #000;
            }
            header h1,
            header h2 {
              font-weight: 200;
              margin: 0;
            }
            header h1 {
              font-size: 27pt;
              letter-spacing: 4px;
            }
            body > * {
              width: 100%;
              max-width: 7in;
              margin: 3px auto;
              background: white;
              text-align: center;
            }
            footer {
              padding: 16px;
            }
            footer p {
              font-size: 9pt;
              margin: 0;
              font-family: 'Nunito';
              color: #000;
            }
            section,
            table {
              padding: 8px 0;
              position: relative;
            }
            dl {
              margin: 0;
              letter-spacing: -4px;
            }
            dl dt,
            dl dd {
              letter-spacing: normal;
              display: inline-block;
              margin: 0;
              padding: 0px 6px;
              vertical-align: top;
            }
            dl.bloc > dt,
            dl:not(.bloc) dt:not(:last-of-type),
            dl:not(.bloc) dd:not(:last-of-type) {
              border-bottom: 1px solid #ddd;
            }
            dl:not(.bloc) dt {
              border-right: 1px solid #ddd;
            }
            dt {
              width: 49%;
              text-align: right;
              letter-spacing: 1px !important;
              overflow: hidden;
            }
            dd {
              width: 49%;
              text-align: left;
            }
            dd,
            tr>td {
              font-family: 'Nunito';
            }
            section.flex {
              display: flex;
              flex-flow: row wrap;
              padding: 8px 16px;
              justify-content: space-around;
            }
            dl.bloc {
              padding: 0;
              flex: 1;
              vertical-align: top;
              min-width: 240px;
              margin: 0 8px 8px;
            }
            dl.bloc>dt {
              text-align: left;
              width: 100%;
              margin-top: 12px;
            }
            dl.bloc>dd {
              text-align: left;
              width: 100%;
              padding: 8px 0 5px 16px;
              line-height: 1.25;
            }
            dl.bloc>dd>dl dt {
              width: 33%;
            }
            dl.bloc>dd>dl dd {
              width: 60%;
            }
            dl.bloc dl {
              margin-top: 12px;
            }
            dl.bloc dd {
              font-size: 11pt;
            }
            table {
              width: 100%;
              padding: 0;
              border-spacing: 0px;
            }
            table tr {
              margin: 0;
              padding: 0;
              background: #fdfdfd;
              border-right: 1px solid #ddd;
              width: 100%;
            }
            table tr td,
            table tr th {
              border: 1px solid #e3e3e3;
              border-top: 1px solid #fff;
              border-left-color: #fff;
              font-size: 11pt;
              background: #fdfdfd;
            }
            table thead th {
              background: #e9e9e9;
              background: linear-gradient(to bottom, #f9f9f9, #e9e9e9) !important;
              font-weight: 300;
              letter-spacing: 1px;
              padding: 15px 0 5px;
            /*&:not(:last-child)*/
              border: none !important;
            }
            table tbody tr:last-child td {
              border-bottom: 1px solid #ddd;
            }
            table tbody td {
              min-width: 75px;
              padding: 3px 6px;
              line-height: 1.25;
            }
            table tfoot tr td {
            /*border 1px solid #e3e3e3
                  border-top 1px solid white
                  border-left-color #fff*/
              height: 40px;
              padding: 6px 0 0;
              color: #000;
              text-shadow: 0 0 1px rgba(0,0,0,0.25);
              font-family: 'Cambria', 'Raleway', sans-serif;
              font-weight: 400;
              letter-spacing: 1px;
            }
            table tfoot tr td:first-child {
              font-style: italic;
              color: #000;
            }
            a {
              color: #992c2c;
            }
            a:hover {
              color: #b00;
            }
            @page {
              margin: 0.5cm;
            }
            /*** @media screen  ***/
            html,
            body {
              background:white;
            }
            header:before {
              content: '';
              position: absolute;
              top: 0;
              right: 0;
              border-top: 12px solid #333;
              border-left: 12px solid #ddd;
              width: 0;
              box-shadow: 1px 1px 2px #ddd;
            }


            </style>
          </head>
      <body onload="window.print();window.close()">${printContents}</body>
        </html>`
      );
      popupWin.document.close();
 }

  // onSubmit(data) {
  //     this.newTotale =  this.facture.totale + data.value.money;
  //     this.destMoney =  data.value.money;
  //     this.addMoney  =   Math.round (this.newTotale * this.percentage * 0.01);
  //     this.endTotale = Math.round ( this.newTotale * (1 + this.percentage * 0.01) );
  //     this.bs.updateFacture(this.destMoney,  this.addMoney, this.endTotale, this.id);
  // }
}

