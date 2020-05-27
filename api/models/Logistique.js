const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Logistic = new Schema({
  _id        : {type: String},
  nom_client: {type: String},
  prenom_client: {type: String},
  contact_client: {type: String},
  adresse_client: {type: String},
  nom_destinataire: {type: String},
  prenom_destinataire: {type: String},
  contact_destinataire: {type: String},
  numero_colis: {type: String},
  frais_magasin_depart: {type: Number},
  frais_magasin_dest: {type: Number},
  frais_add: {type: Number},
  statut: {type: String},
  totale: {type: Number},
  facture: {type: String},
  paquets : [ {
    numero: {type: String},
    quantite: {type: Number},
    designation: {type: String},
    prix_unitaire: {type: Number},
    valeur: {type:Number}
  },
],
date   : {type: Number},
reduce : {type: Number}
  
},{
    collection: 'logistic'
});

module.exports = mongoose.model('Logistic', Logistic);