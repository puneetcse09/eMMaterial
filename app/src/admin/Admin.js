(function(){
  'use strict';
  angular.module('admin', [ 'ngMaterial', 'ngMdIcons' ])
  .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/admin');
      $stateProvider
      .state('admin', {
          url: "/admin",
          templateUrl: "src/admin/view/instituteDetails.html"
      })
   });


})();
