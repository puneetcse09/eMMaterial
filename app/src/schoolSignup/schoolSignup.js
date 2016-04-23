(function(){
  'use strict';

  // Prepare the 'users' module for subsequent registration of controllers and delegates
  angular.module('schoolSignup', [ 'ngMaterial', 'ngMdIcons' ])
  .config(function($stateProvider, $urlRouterProvider) {

    
      $stateProvider
      .state('schoolSignup', {
          url: "/schoolSignup",
          templateUrl: "/src/schoolSignup/view/schoolSignup.html"
      })
   });


})();
