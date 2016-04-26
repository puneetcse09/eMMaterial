(function(){
  angular.module('schoolSignup')
         .controller('schoolSignupCtrl', ['$mdSidenav', '$mdDialog', '$mdBottomSheet', '$log', '$q','$scope', 'appUtils',
                                          schoolSignupCtrl
                                       ]);

  function schoolSignupCtrl($mdSidenav, $mdDialog , $mdBottomSheet, $log, $q, $scope, appUtils) {
	    var self = this;
	    self.states = "";    
	    self.load = function(){
	    	$log.info("School signup >> "+self);
	    	
	    }
	   
	    	
	  /**
	   * Open Register Self dialog box
	   */  
	  $scope.showAddSchoolSignupDialog = function($event) {
	        $mdDialog.show({
	          controller: DialogController,
	          templateUrl: 'src/schoolSignup/view/schoolSignup.html',
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
