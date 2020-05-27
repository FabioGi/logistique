const express = require('express');
const app = express();
const clientRoutes = express.Router();

// Require Business model in our routes module
let Client = require('../models/Client');
let clientController = require('../controller/controller.client');
// Defined store route
// clientRoutes.route('/add').post(function (req, res) {
//     clientController.creatclient(req.body,res);
// });

clientRoutes.route('/add').post(function (req, res) {
    let client = new Client(req.body);
    client.save()
      .then(Client => {
        res.status(200).json({'business': 'business in added successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
  });


// Defined get data(index or listing) route
// creation du lien ajax du server
clientRoutes.get('/', (req, res) => {
    clientController.getClient(req , res);
});

clientRoutes.get('/dest', (req, res) => {
    clientController.getDestinataire(req , res);
});


// Defined edit route
clientRoutes.route('/edit/:id').get(function (req, res) {
    clientController.editClient(req , res);
});

//  Defined update route
clientRoutes.route('/update/:id').post(function (req, res) {
    clientController.updateClient(req , res);
});

// Defined delete | remove | destroy route
clientRoutes.route('/delete/:id').get(function (req, res) {
    clientController.deleteClient(res, req);
});

module.exports = clientRoutes;