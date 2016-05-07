var myapp = angular.module('starterApp', 
		[ 'ng', 'ngMaterial', 'ngMdIcons', "ngAnimate", "ngAria",'ui.router',
		  'sideNavBar','navBar','emHome','loginPage','loginHome','schoolSignup','addFooter',
		   'ngAutocomplete'])
		  .run(
				  ['$rootScope', '$state', '$stateParams',
				   function ($rootScope,   $state,   $stateParams) {
					  
                // It's very handy to add references to $state and $stateParams to the $rootScope
                // so that you can access them from any scope within your applications.For example,
                // <li ui-sref-active="active }"> will set the <li> // to active whenever
                // 'contacts.list' or one of its decendents is active.
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
                }])
		  .config(
				  function($mdThemingProvider, $mdIconProvider, $stateProvider, $urlRouterProvider) {
					  
					  $urlRouterProvider.otherwise('/home');
					 

					  
					  $mdThemingProvider.alwaysWatchTheme(true);
					  $mdThemingProvider.theme('default')
                          .primaryPalette('cyan')
                          .accentPalette('red');
//                    red, pink, purple, deep-purple, indigo, blue, light-blue, 
//                    cyan, teal, green, light-green, lime, yellow, amber, orange, 
//                    deep-orange, brown, grey, blue-grey
		})
		.config(['$logProvider', function($logProvider){
    	
			//if true then $log.debug will appear in browser console.
			//if false then $log.debug will not appear in browser console.
			$logProvider.debugEnabled(true);
		}])
		.config(['$provide', function ($provide) {
			$provide.decorator('$log', ['$delegate', function ($delegate) {
    		// Keep track of the original debug method, we'll need it later
				var origDebug = $delegate.debug;
				/*
				 * Intercept the call to $log.debug() so we can add on
	             * our enhancement. We're going to add on a date and
	             * time stamp to the message that will be logged.
	             */
				$delegate.debug = function () {
					var args = [].slice.call(arguments);
					var date = new Date();
					var today=date.getFullYear()+""+(date.getMonth()+1)+""+date.getDate()+"-"+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
					
					args[0] = ['['+today+']'+':[DEBUG]: - '+args[0]].join('');
					
					// Send on our enhanced message to the original debug method.
					origDebug.apply(null, args)
					};
					return $delegate;
					}]);
			}])
		.factory('appUtils', ["$http", function($http){
	    	var utility={
	 		       "defaultParseResponse":function(response,callback){
	 		             if(!response.error){
	 		                  callback(response);
	 		             }else{
	 		                  //$('#errorModal').find('.modal-body').html(response.errorMsg);
	 		                  //$('#errorModal').modal('show');
	 		                  return;
	 		             }
	 		        }
	 	  };
	 	return utility;
	    }])
