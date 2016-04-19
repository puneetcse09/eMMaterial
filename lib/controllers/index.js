'use strict';

var path = require('path');
var partialAccess = require('../common/models/partialsAccess.js');

exports.partials = function(req, res) {
  var stripped = req.url.split('.')[0];
  var requestedView = path.join('./', stripped);
  if(partialAccess.crud.hasOwnProperty(requestedView)){
      var accessList=partialAccess.crud[requestedView];
      var userType=req.session.userDetails.basicDetails.userType;
      if(accessList.indexOf(userType)>-1){
          res.render(requestedView, function(err, html) {
              if(err) {
                  res.render('404');
              } else {
                  res.send(html);
              }
          });
      }else{
          res.send("");
      }
  }else{
      console.log("Default behaviour......");
      res.render(requestedView, function(err, html) {
          if(err) {
              res.render('404');
          } else {
              res.send(html);
          }
      });
  }

};

exports.index = function(req, res) {
  res.render('index');
};
