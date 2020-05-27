import { Component, OnInit } from '@angular/core';
import { LogisticService } from '../logistic.service';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';

@Component({
  selector: 'app-factures',
  templateUrl: './factures.component.html',
  styleUrls: ['./factures.component.scss']
})
export class FacturesComponent implements OnInit {
  facture: any;
  ngxQrcode2 = null;
  id: string;
  percentage: any;
  newTotale: number;
  endTotale: number;
  destMoney: any;
  addMoney: number;
  d: number;
  reduction = false ;
  reduce: number;
  imgSrc = 'assets/images/stim.png';
  constructor(private bs: LogisticService,
              private route: ActivatedRoute,
              private router: Router ) {}

  ngOnInit() {
    this.id  = this.route.snapshot.paramMap.get('id');
    this.bs
        .editFacture(this.id)
        .subscribe((data: any) => {
          this.facture = data;
          console.log(this.facture);
          this.ngxQrcode2 =  this.id;
        });

        this.bs.getParam().subscribe((data) => {
          this.percentage = data[0].parameter;
        });

        this.d = Date.now();

  }

  exoneration() {
    this.reduction = true;
  }

  onSubmit(data?) {
    //  // this.newTotale =  this.facture.totale - this.facture.frais_magasin_depart;
      this.addMoney  =   Math.round ( this.facture.totale * this.percentage * 0.01);
      this.reduce =  data.value.reduc ? Math.round ( this.facture.totale * data.value.reduc * 0.01) : 0 ;
      this.endTotale =  this.facture.totale + this.addMoney - this.reduce ;
       this.bs.updateFacture(this.addMoney, this.endTotale, this.id, data.value.reduc);
     // console.log(this.addMoney, this.destMoney);
     // this.router.navigate(['/print-facture/' + this.id]);
      window.location.href = '/print-facture/' + this.id ;
      console.log( this.endTotale);
  }
}
