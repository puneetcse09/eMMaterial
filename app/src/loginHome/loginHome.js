(function(){
  'use strict';
  angular.module('loginHome', [ 'ngMaterial', 'ngMdIcons' ])
  .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/home');
      $stateProvider
      .state('loginHome', {
          url: "/loginHome",
          templateUrl: "src/loginHome/view/loginHome.html"
      })
   });


})();
