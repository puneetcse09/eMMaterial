(function(){
  angular.module('registerSelf')
         .controller('registerSelfCtrl', ['$mdSidenav', '$mdDialog', '$mdBottomSheet', '$log', '$q','$scope', 'appUtils', 'homeService',
                                          'registerSelfService', registerSelfCtrl
                                       ]);

  function registerSelfCtrl($mdSidenav, $mdDialog , $mdBottomSheet, $log, $q, $scope, appUtils, homeService, registerSelfService) {
	    var self = this;
	    self.states = "";    
	    self.load = function(){
	    	$log.info("Inside load of registerSelfCtrl >> "+self);
	    	
	    }
	    	
	  /**
	   * Open Register Self dialog box
	   */  
	  $scope.showAddSelfDialog = function($event) {
	        $mdDialog.show({
	          controller: DialogController,
	          templateUrl: 'src/registerSelf/view/registerSelf.html',
	          targetEvent: $event,
	        })
	        .then(function(answer) {
	        	self.alert = 'You said the information was "' + answer + '".';
	        }, function() {
	        	self.alert = 'You cancelled the dialog.';
	        });       
	    }
	   
	  
	  /**
	   * Internal Controller for Dialog box
	   */
	  function DialogController($scope, $mdDialog, $log, $http, homeService) {
		   $scope.userObj = homeService.getUserPOJO();    
		   
		   var gmapsService = null; //new google.maps.places.AutocompleteService();
		   $scope.selectedGMapCity = '';
		   $scope.selectedCityDetail = '';
		   $scope.searchGMapText = '';
		   
		   $scope.hide = function() {
	 	    $mdDialog.hide();
	 	  	};
	 	  	
	 	  $scope.cancel = function() {
	 	    $mdDialog.cancel();
	 	  };
	 	  $scope.answer = function(answer) {
	 	    $mdDialog.hide(answer);
	 	  };
	
	     /*$scope.searchGoogleAddress = function(address) {
	    	 var deferred = $q.defer();
	    	 
	    	 getGoogleAddressResults(address).then(
	    			 function (predictions) {
	    				 var results = [];
	    				 for (var i = 0, prediction; prediction = predictions[i]; i++) {
	    					 results.push(prediction);
	    					 }
	    				 deferred.resolve(results);
	    				 }
	    			 );
	    	 return deferred.promise;
	     	}   */
	
	     /**
	      * Promising the returned result 
	      */
	     function getGoogleAddressResults(address) {
	    	 var deferred = $q.defer();
	    	 gmapsService.getQueryPredictions({input: address}, function (data) {
	//     		  $log.debug("getResults >>>>>>>>> "+JSON.stringify(data));
	    		 deferred.resolve(data);
	     	  });
	     	  return deferred.promise;
	     	}
	 	
	   	 $scope.save = function() {
	   		$log.debug("In save of registerSelfCtrl ::: userObj >>>>>>>>> "+JSON.stringify($scope.userObj));
	   		try{
	   			registerSelfService.registerUser($scope.userObj)
	    		.then(function(response){
	    			$log.debug("In registerSelfCtrl  : "+JSON.stringify(response));
	    			$scope.userObj = response[0];	
	    			$log.debug("After save >>> "+JSON.stringify($scope.userObj));
	    		})
	    	}catch(e){
	    			$log.debug(e);
	    	}
	   		
	   		$mdDialog.hide();
	  	  };
	 }
   
   
  }

})();
