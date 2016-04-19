(function(){
  'use strict';

  // Prepare the 'users' module for subsequent registration of controllers and delegates
  angular.module('homeSummary', [ 'ngMaterial', 'ngMdIcons' ])
  .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/home');
      $stateProvider
      .state('homeSummary', {
          url: "/search-summary?name&city&feeRange&zip&board&medium&category",
          templateUrl: "src/homeSummary/view/HomeSummary.html"
      })
   });


})();
