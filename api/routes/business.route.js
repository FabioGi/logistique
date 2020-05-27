const express = require('express');
const app = express();
const appRoutes = express.Router();

// Require Business model in our routes module
let Business = require('../models/Business');
let Client = require('../models/Client');
let Logistic = require('../models/Logistique');

let businessController = require('../controller/controller');
let logistiqueController = require('../controller/controller.logistique');
let clientController = require('../controller/controller.client');

// Defined store route
appRoutes.route('/add').post(function (req, res) {
  let business = new Business(req.body);
  business.save()
    .then(business => {
      res.status(200).json({'business': 'business in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});


// Defined get data(index or listing) route
// creation du lien ajax du server
appRoutes.get('/getbusy', (req, res) => {
      businessController.getBusiness(req , res);
});


// Defined edit route
appRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Business.findById(id, function (err, business){
      res.json(business);
  });
});

//  Defined update route
appRoutes.route('/update/:id').post(function (req, res) {
    Business.findById(req.params.id, function(err, business) {
    if (!business)
      return next(new Error('Could not load Document'));
    else {
        business.person_name = req.body.person_name;
        business.business_name = req.body.business_name;
        business.business_gst_number = req.body.business_gst_number;

        business.save().then(business => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
appRoutes.route('/delete/:id').get(function (req, res) {
    Business.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

/******************************************* LOGISTIC ROUTES ************************************/


module.exports = appRoutes;