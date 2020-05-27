const express = require('express');
const app = express();
const logistiqueRoutes = express.Router();

// Require Business model in our routes module
let Logistic = require('../models/Logistique');
let logistiqueController = require('../controller/controller.logistique');
// Defined store route
// logistiqueRoutes.route('/add').post(function (req, res) {
//     logistiqueController.creatLogistique(req.body,res);
// });

logistiqueRoutes.route('/add').post(function (req, res) {
    let logistic = new Logistic(req.body);
    logistic.save()
      .then(logistic => {
        res.status(200).json({'business': 'business in added successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
  });


// Defined get data(index or listing) route
// creation du lien ajax du server
logistiqueRoutes.get('/', (req, res) => {
    logistiqueController.getLogistique(req , res);
});

logistiqueRoutes.get('/param', (req, res) => {
    logistiqueController.editParameter(req , res); 
});

logistiqueRoutes.route('/updateparam').post(function (req, res) {
    logistiqueController.updateParam(req , res);
});


// Defined edit route
logistiqueRoutes.route('/facture/:id').get(function (req, res) {
    logistiqueController.editLogistique(req , res);
});

//  Defined update route
logistiqueRoutes.route('/factureUpdate/:id').post(function (req, res) {
    logistiqueController.updateLogistique(req , res);
});

// Defined delete | remove | destroy route
logistiqueRoutes.route('/delete/:id').get(function (req, res) {
    logistiqueController.deleteLogistique(res, req);
});

module.exports = logistiqueRoutes;