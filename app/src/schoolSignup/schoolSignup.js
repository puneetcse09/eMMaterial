(function(){
  'use strict';
  angular.module('schoolSignup', [ 'ngMaterial', 'ngMdIcons' ])
  .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/home');
      $stateProvider
      .state('schoolSignup', {
          url: "/schoolSignup",
          templateUrl: "src/schoolSignup/view/schoolSignup.html"
      })
   });


})();
