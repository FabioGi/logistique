
import { Component, OnInit } from '@angular/core';
import { LogisticService } from '../logistic.service';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
@Component({
  selector: 'app-recu',
  templateUrl: './recu.component.html',
  styleUrls: ['./recu.component.scss']
})
export class RecuComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}
export class FacturesComponent implements OnInit {
  facture: any;
  ngxQrcode2 = null;
  id: string;
  percentage: any;
  newTotale: number;
  endTotale: number;
  destMoney: any;
  addMoney: number;

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

}

  onSubmit(data) {
  this.newTotale =  this.facture.totale + data.value.money;
  this.destMoney =  data.value.money;
  this.addMoney  =   Math.round (this.newTotale * this.percentage * 0.01);
  this.endTotale = Math.round ( this.newTotale * (1 + this.percentage * 0.01) );
  this.bs.updateFacture(this.destMoney,  this.addMoney, this.endTotale, this.id);
  this.router.navigate(['/print-recu/' + this.id]);
  }
}

