(function(){
  'use strict';

  // Prepare the 'users' module for subsequent registration of controllers and delegates
  angular.module('dashboard', [ 'ngMaterial', 'ngMdIcons' ])
  .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/dashboard');
      $stateProvider
      .state('dashboard', {
          url: "/dashboard?school&city",
          templateUrl: "src/dashboard/view/dashboard.html"
      })
   });


})();
