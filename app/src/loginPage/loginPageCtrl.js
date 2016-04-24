(function(){
  angular.module('loginPage')
         .controller('loginPageCtrl', ['$mdSidenav', '$mdDialog', '$mdBottomSheet', '$log', '$q','$scope', 'appUtils',
                                       loginPageCtrl
                                       ]);

  function loginPageCtrl($mdSidenav, $mdDialog , $mdBottomSheet, $log, $q, $scope, appUtils) {
	    var self = this;
	    self.states = "";    
	    self.load = function(){
	    	$log.info("Login >> "+self);
	    	
	    }
	    	
	  /**
	   * Open Register Self dialog box
	   */  
	  $scope.showAddLoginDialog = function($event) {
	        $mdDialog.show({
	          controller: DialogController,
	          templateUrl: 'src/loginPage/view/loginPage.html',
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
	   function DialogController($scope, $mdDialog, $log, $http) {
		  
	 	  $scope.cancel = function() {
	 	    $mdDialog.cancel();
	 	  };
	 	 
	
	      $scope.save = function() {
	   		 $mdDialog.hide();
	  	  };
	 	}
   
   
  }

})();
