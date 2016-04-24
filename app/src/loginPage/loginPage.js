(function(){
  'use strict';
  angular.module('loginPage', [ 'ngMaterial', 'ngMdIcons' ])
  .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/home');
      $stateProvider
      .state('loginPage', {
          url: "/loginPage",
          templateUrl: "src/loginPage/view/loginPage.html"
      })
   });


})();
