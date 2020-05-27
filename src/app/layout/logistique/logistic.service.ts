import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogisticService {

  constructor(private http: HttpClient,  private router: Router ) { }

  uri       = 'http://localhost:4000/logistic';
  uriClient = 'http://localhost:4000/client';
// mpi open mpi
  paquet = {};
  paquets = [];
   createLogistic(formData, id, totale, paquets) {
    const obj = {
      _id                 : id,
      nom_client          : formData.value.newClientfirstname ? formData.value.newClientfirstname : formData.value.selectClient.nom_client,
      prenom_client       : formData.value.newClientlastname ? formData.value.newClientlastname : formData.value.selectClient.prenom_client,
      contact_client      : formData.value.newClientContact ? formData.value.newClientContact : formData.value.selectClient.contact_client,
      adresse_client      : formData.value.newClientAdresse ? formData.value.newClientAdresse : formData.value.selectClient.adresse_client,
      nom_destinataire    : formData.value.newDestfirstname ? formData.value.newDestfirstname : formData.value.selectDestinataire.nom_client,
      prenom_destinataire : formData.value.newDestlastname ? formData.value.newDestfirstname : formData.value.selectDestinataire.prenom_client,
      contact_destinataire: formData.value.newDestContact ? formData.value.newDestContact : formData.value.selectDestinataire.contact_client,
      numero_colis        : formData.value.newClientcolis,
      frais_magasin_depart: formData.value.newFraisdepart ? formData.value.newFraisdepart : null,
      frais_magasin_dest  : formData.value.newFraisdepart ? formData.value.newFraisdepart : null,
      frais_add           : 0,
      totale              : totale,
      statut              : 'en-cours',
      paquets             : paquets,
      facture             : 'non facturé',
      date                :  Date.now(),
      reduce              : 0
    };

    const clientObj = {
      id_colis      : id,
      nom_client    : formData.value.newClientfirstname,
      prenom_client : formData.value.newClientlastname,
      contact_client: formData.value.newClientContact,
      adresse_client: formData.value.newClientAdresse,
      role          : 'client'
    };
    const destinataireObj = {
      id_colis      : id,
      nom_client    : formData.value.newDestfirstname,
      prenom_client : formData.value.newDestlastname,
      contact_client: formData.value.newDestContact,
      role                : 'destinataire'
    };
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => {
            console.log( Date.now());
          });
    if ( formData.value.newClientfirstname) {
      this.http.post(`${this.uriClient}/add`, clientObj)
                .subscribe(res => console.log(clientObj));
    }
    if (formData.value.newDestfirstname) {
      this.http.post(`${this.uriClient}/add`,  destinataireObj)
      .subscribe(res => {
          // this.router.navigate(['/logistic-code/' + id]);
          console.log(res);
        });
    }
   // console.log(obj);
  }

  getClient() {
    return this
           .http
           .get(`${this.uriClient}/`);
  }

  getDestinataire() {
    return this
           .http
           .get(`${this.uriClient}/dest`);
  }

  getColis() {
    return this
    .http
    .get(`${this.uri}/`);
  }

  editBusiness(id) {
    return this
            .http
            .get(`${this.uri}/facture/${id}`);
    }

    editFacture(id) {
      return this
              .http
              .get(`${this.uri}/facture/${id}`);
      }

    getParam() {
      return this
              .http
              .get(`${this.uri}/param`);
      }

    updateBusiness(person_name, business_name, business_gst_number, id) {

      const obj = {
          person_name: person_name,
          business_name: business_name,
          business_gst_number: business_gst_number
        };
      this
        .http
        .post(`${this.uri}/update/${id}`, obj)
        .subscribe(res => console.log('Done'));
    }

    updateParam(param) {
      const obj = {
          parameter: param,
        };
        console.log(obj);
      this
        .http
        .post(`${this.uri}/updateparam/`, obj)
        .subscribe(res => console.log('Done'));
    }

    updateFacture(addMoney, endTotale, id, reduce) {
        const obj = {
          reduce             : reduce,
          frais_add          : addMoney,
          totale             : endTotale,
          facture            : 'facturer'
        };
        console.log(obj);
      this
        .http
        .post(`${this.uri}/factureUpdate/${id}`, obj)
        .subscribe(res => console.log('Done', res, obj));
        this.router.navigate(['/print-facture/' + id]);
    }

    deleteBusiness(id) {
      return this
                .http
                .get(`${this.uri}/delete/${id}`);
    }
}
