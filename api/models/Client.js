const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Client = new Schema({
  id_colis         : {type: String},
  nom_client: {type: String},
  prenom_client: {type: String},
  contact_client: {type: String},
  adresse_client: {type: String},
  role: {type: String},
},{
    collection: 'client'
});

module.exports = mongoose.model('Client', Client);