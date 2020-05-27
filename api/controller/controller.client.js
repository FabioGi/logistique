'use strict';

var Client = require('../models/Client');
//Get Users from DB
var getClient = function(req , res){
    Client.find( {role: 'client'},(err, Client) => {
        if(err){
          console.log(err);
        }
        else {
          res.json(Client);
        }
      });
};

var getDestinataire = function(req , res){
  Client.find( {role: 'destinataire'},(err, Client) => {
      if(err){
        console.log(err);
      }
      else {
        res.json(Client);
      }
    });
};


var creatClient = function(data,res) {
  let client = new Client(data);
  client.save()
          .then(Client => {
                 res.status(200).json({'Client': 'Client in added successfully'});
          })
          .catch(err => {
          res.status(400).send("unable to save to database");
          });
};

var updateClient = function(req, res){
  Client.findById(req.params.id, function(err, Client) {
    if (!Client)
      return next(new Error('Could not load Document'));
    else {
        Client.person_name = req.body.person_name;
        Client.Client_name = req.body.Client_name;
        Client.Client_gst_number = req.body.Client_gst_number;

        Client.save().then(Client => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
}

var editClient = function(req,res){
  let id = req.params.id;
  Client.findById(id, function (err, Client){
      res.json(Client);
  });
}

var deleteClient = function(res , req){
    Client.findByIdAndRemove({_id: req.params.id}, function(err, Client){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
}


module.exports = {
   editClient  : editClient,
   creatClient : creatClient,
   getClient   : getClient,
   getDestinataire: getDestinataire,
   updateClient: updateClient,
   deleteClient: deleteClient
}
