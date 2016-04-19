(function(){
  'use strict';

  // Prepare the 'users' module for subsequent registration of controllers and delegates
  angular.module('home', [ 'ngMaterial', 'ngMdIcons' ])
  .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/home');
      $stateProvider
      .state('home', {
          url: "/home",
          templateUrl: "src/home/view/home.html"
      })
      .state('display',{
    	  url : "/display",
    	  controller : 'DisplayController',
    	  templateUrl : 'src/dataDisplay/view/display.html',
    	  searchParam : {
    		  data : self.search
    	  }
      })
      

      /*
      $urlRouterProvider.when('/diplay',{
    	  controller : 'DisplayController',
    	  templateUrl : 'src/dataDisplay/view/display.html',
    	  searchParam : "data"
      })*/
   });


})();
