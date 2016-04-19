(function(){
  'use strict';

  // Prepare the 'users' module for subsequent registration of controllers and delegates
  angular.module('users', [ 'ngMaterial', 'ngMdIcons' ])
  .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/users');
      $stateProvider
      .state('users', {
          url: "/users",
          templateUrl: "src/users/view/users.html"
      })
   });


})();
