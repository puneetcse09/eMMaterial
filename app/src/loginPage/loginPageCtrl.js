(function(){
  angular.module('loginPage')
         .controller('loginPageCtrl', ['$mdSidenav', '$mdDialog', '$mdBottomSheet', '$log', '$q','$scope', 'appUtils','$state','$window',
                                       loginPageCtrl
                                       ]);

  function loginPageCtrl($mdSidenav, $mdDialog , $mdBottomSheet, $log, $q, $scope, appUtils,$state,$window) {
	    var self = this;
	    self.states = "";    
	    self.load = function(){
	    	$log.info("loginPage >> "+self);
	    	
	    }
	    $scope.forgotPass = function () {
	    	 $window.alert(" Password :abc");
	    	
	    };
	   
	    $scope.rememberPass = function () {
            if ($scope.rememberMe) {
                $window.alert("User Name: abc Password :abc");
            } else {
                $window.alert("CheckBox is not checked.");
            }
        };
	  /**
	   * Open Register Self dialog box
	   */  
	  $scope.showAddLoginPageDialog = function($event) {
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
	   function DialogController($scope, $mdDialog, $log, $http,$state) {
		  
	 	  $scope.cancel = function() {
	 	    $mdDialog.cancel();
	 	  };
	 	 
	
	 	 $scope.login = function (userName, pass){
	 		 if ( userName === 'abc' && pass === 'abc') 
	 		 {
	 			 $state.go('loginHome');
	 			$mdDialog.hide();
	 		 }
	 		 else {
	 			$scope.error="Invalid UserName & password";
	 		
	 			    
	 			  
	 			
	 			}
	    	  
	   		 
	  	  };
	 	}
   
   
  }

})();
