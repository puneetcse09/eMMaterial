(function(){
  'use strict';

  // Prepare the 'users' module for subsequent registration of controllers and delegates
  angular.module('userAdmin', [ 'ngMaterial', 'ngMdIcons' ])
  .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/home');
      $stateProvider
      .state('userAdmin', {
          url: "/userAdmin",
          templateUrl: "/src/userAdmin/view/userAdmin.html"
      })
   });


})();
