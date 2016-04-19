(function(){
  'use strict';
  angular.module('registerUser', [ 'ngMaterial', 'ngMdIcons' ])
  .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/home');
      $stateProvider
      .state('registerUser', {
          url: "/registerUser",
          templateUrl: "src/registerUser/view/registerUser.html"
      })
   });
})();
