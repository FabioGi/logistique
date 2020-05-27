'use strict';

var Business = require('../models/Business');

// var updateUser = function(criteria, dataToSet, options, callback) {
//     options.lean = true;
//     options.new = true;
//     Models.findOneAndUpdate(criteria, dataToSet, options, callback);
// };

//Insert User in DB
// var createUser = function(objToSave, callback) {
//     new Models(objToSave).save(callback)
// };
//Delete User in DB
// var deleteUser = function(criteria, callback) {
//     Models.findOneAndRemove(criteria, callback);
// };

//Get Users from DB
var getBusiness = function(req , res){
    Business.find((err, businesses) => {
        if(err){
          console.log(err);
        }
        else {
          res.json(businesses);
        }
      });
};

// businessRoutes.get('/getbusy', (req, res) => {
//    // appelle controlleur
//   });

module.exports = {
   // updateUser: updateUser,
  //  createUser: createUser,
   // deleteUser: deleteUser,
   getBusiness   :   getBusiness
}
