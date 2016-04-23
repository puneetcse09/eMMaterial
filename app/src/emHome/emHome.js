(function(){
  'use strict';

  // Prepare the 'users' module for subsequent registration of controllers and delegates
  angular.module('emHome', [ 'ngMaterial', 'ngMdIcons' ])
  .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/home');
      $stateProvider
      .state('emHome', {
          url: "/home",
          templateUrl: "/src/emHome/view/emHome.html"
      })
   });


})();
