(function(){
  'use strict';
  angular.module('registerSchool', [ 'ngMaterial', 'ngMdIcons' ])
  .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/home');
      $stateProvider
      .state('registerSchool', {
          url: "/registerSchool",
          templateUrl: "src/registerSchool/view/registerSchool.html"
      })
   });


})();
