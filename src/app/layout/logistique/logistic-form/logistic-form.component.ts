import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Router } from '@angular/router';
import Business from 'src/app/Business';
import { LogisticService } from '../logistic.service';
export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-logistic-form',
  templateUrl: './logistic-form.component.html',
  styleUrls: ['./logistic-form.component.scss']
})
//
export class LogisticFormComponent implements OnInit {
  showAddClient = false ;
  showSelectClient = false;
  showAddDestinataire = false ;
  showSelectDestinataire = false ;
  formValue  = 0 ;
  businesses: any[];
  clients: any[];
  destinataire: any[];
  ngxQrcode2 = null;
  showQRcode = false;
  clientname: any;
  clientlastname: any;
  contact_client: any;
  adresse_client: any;
  nom_destinataire: any;
  prenom_destinataire: any;
  contact_destinataire: any;
  numero_colis: any;
  code_colis: any;
  nature_colis: any;
  frais_magasin_depart: any;
  frais_magasin_dest: any;
  nombre_pqts: any;
  valeur_pqts: any;
  statut: string;
  Value = [];
  paquet = {};
  paquets = [];
  qteValue = [];
  priceValue = [];
  designationValue = [];
  donnee: number;
  totale = 0;
  id: string;
  paniers = [1, 2, 3, 4, 5, 6, 7, 8];
  d: any;

  imgSrc = 'assets/images/stim.png';

  constructor(	private location: Location,
                private router: Router,
                private bs: LogisticService  ) {

   }

  ngOnInit() {
    this.bs
        .getClient()
        .subscribe((data: any[]) => {
          this.clients = data;
        });


      this.bs
      .getDestinataire()
      .subscribe((data: any[]) => {
        this.destinataire = data;
      });
      this.d = Date.now();
     // console.log(this.makeid(10));
  }


  onSubmit(newClientForm: NgForm) {
    this.showQRcode = true;
    console.log(newClientForm.value);

    this.clientname     = newClientForm.value.newClientfirstname ?
                     newClientForm.value.newClientfirstname :
                     newClientForm.value.selectClient.nom_client,
    this.clientlastname = newClientForm.value.newClientlastname ?
                     newClientForm.value.newClientlastname :
                     newClientForm.value.selectClient.prenom_client;
    this.contact_client = newClientForm.value.newClientContact ?
                          newClientForm.value.newClientContact :
                          newClientForm.value.selectClient.contact_client,
    this.adresse_client      = newClientForm.value.newClientAdresse ?
                               newClientForm.value.newClientAdresse :
                               newClientForm.value.selectClient.adresse_client,
    this.nom_destinataire    = newClientForm.value.newDestfirstname ?
                               newClientForm.value.newDestfirstname :
                               newClientForm.value.selectDestinataire.nom_client,
    this.prenom_destinataire = newClientForm.value.newDestlastname ?
                               newClientForm.value.newDestfirstname :
                               newClientForm.value.selectDestinataire.prenom_client,
    this.contact_destinataire = newClientForm.value.newDestContact ?
                               newClientForm.value.newDestContact :
                               newClientForm.value.selectDestinataire.contact_client,
    this.numero_colis        = newClientForm.value.newClientcolis,
    this.code_colis          = newClientForm.value.newClientCodeColis,
    this.nature_colis        = newClientForm.value.newClientNatureColis,
    this.frais_magasin_depart = newClientForm.value.newFraisdepart ? newClientForm.value.newFraisdepart : 0 ,
    this.nombre_pqts         = newClientForm.value.newClientNbrePaq,
   // this.valeur_pqts         = newClientForm.value.newClientValPaq,
    this.statut              = 'en-cours';
   // this.paquet['']              =
   this.id = this.makeid(16);

    this.ngxQrcode2 =  this.id  ;
                      // '+' + this.clientname + '+ ' + this.clientlastname
                      // + '+' + this.contact_client + '+' +  this.adresse_client
                      // + '+' + this.adresse_client + '+' +  this.nom_destinataire
                      // + '+' + this.prenom_destinataire + '+' + this.contact_destinataire
                      // + '+' +  this.contact_destinataire + '+' + this.numero_colis
                      // + '+' +  this.nature_colis + this.frais_magasin_depart + '+' + this.frais_magasin_dest
                      // + '+' +   this.nombre_pqts + '+' +  this.valeur_pqts + '+' + this.statut    ;
   for (let i = 0; i < this.qteValue.length ; i++) {
    const paquet = {
      numero:  'N°' + i ,
      quantite: this.qteValue[i],
      designation: this.designationValue[i],
      prix_unitaire: this.priceValue[i],
      valeur:  this.priceValue[i]
    };
    this.paquets[i] = paquet;
    this.totale += Number(this.priceValue[i]);
   }
   // this.totale = this.totale ;
   this.bs.createLogistic(newClientForm, this.id, this.totale,  this.paquets );
  }

  print(): void {
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

  getTotalValue(value: any) {
    this.formValue =  this.formValue + value ;
    console.log(this.formValue);
  }
  getValue(value: number) {
    this.Value = [];
    for (let index = 0; index < value; index++) {
      this.Value.push(index) ;
    }
  }
  cancel(): void {
    document.location.reload(true);
  }

  goBack() {
     this.location.back();
  }

  getqteValue(value: number) {
    this.qteValue.push(value);
    // this.formValue =  this.formValue + value ;
  }

  getdesignationValue(value: number) {
    this.designationValue.push(value);
  }

  getPriceValu(value: number) {
    this.priceValue.push(value);
    this.formValue =  this.formValue + value ;
  }

   makeid(length) {
    let text = '';
    const possible = '0123456789';

    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

}
