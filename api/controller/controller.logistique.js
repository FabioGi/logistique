'use strict';

var Logistique = require('../models/Logistique');
var Parameter = require('../models/Parameter');
//Get Users from DB
var getLogistique = function(req , res){
    Logistique.find((err, logistique) => {
        if(err){
          console.log(err);
        }
        else {
          res.json(logistique);
        }
      });
};


var creatLogistique = function(data,res) {
  let logistic = new Logistique(data);
  logistic.save()
          .then(Logistique => {
                 res.status(200).json({'Logistique': 'Logistique in added successfully'});
          })
          .catch(err => {
          res.status(400).send("unable to save to database");
          });
};

var updateLogistique = function(req, res){
  Logistique.findById(req.params.id, function(err, logistique) {
    if (!logistique)
      return next(new Error('Could not load Document'));
    else {
          logistique.reduce             = req.body.reduce;
          logistique.frais_add          = req.body.frais_add;
          logistique.totale             = req.body.totale;
          logistique.facture            = req.body.facture;

        logistique.save().then(logistique => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
}

var updateParam = function(req, res){
  console.log(req.params);
  Parameter.find( {id_param: 1},(err, param) => {
    if (!param)
      return next(new Error('Could not load Document'));
    else {
        param[0].parameter = req.body.parameter;
        param[0].save().then(param => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
}

var editLogistique = function(req,res){
  let id = req.params.id;
  Logistique.findById(id, function (err, param){
      res.json(param);
  });
}

var editFacture = function(req,res){
  let id = req.params.id;
  logistic.findById(id, function (err, param){
      res.json(param);
  });
}

var editParameter = function(req,res){
  Parameter.find( {id_param: 1},(err, param) => {
    if(err){
      console.log(err);
    }
    else {
      res.json(param);
    }
  });
}


var deleteLogistique = function(res , req){
    Logistique.findByIdAndRemove({_id: req.params.id}, function(err, logistique){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
}


module.exports = {
   editLogistique  : editLogistique,
   creatLogistique : creatLogistique,
   getLogistique   : getLogistique,
   updateLogistique: updateLogistique,
   deleteLogistique: deleteLogistique,
   editParameter   : editParameter,
   updateParam     : updateParam
}
