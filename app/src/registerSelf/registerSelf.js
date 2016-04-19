(function(){
  'use strict';
  angular.module('registerSelf', [ 'ngMaterial', 'ngMdIcons' ])
  .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/home');
      $stateProvider
      .state('registerSelf', {
          url: "/registerSelf",
          templateUrl: "src/registerSelf/view/registerSelf.html"
      })
   });


})();
