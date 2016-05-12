(function(){

  angular
       .module('loginPage')
       .controller('loginPageCtrl', [
          'loginPageService', '$mdSidenav', '$mdBottomSheet', '$log','$scope', '$q' ,'$state', '$stateParams','$window',
          LoginPageCtrl
       ]);

  function  LoginPageCtrl( loginPageService, $mdSidenav, $mdBottomSheet, $log,$scope, $q, $state, $stateParams,$window) {
    var self = this;

    self.load         = load;

    
    /**
     * Load function to initialize the current template with default services
     */
    function load(){
    
    	$log.info("Inside load of captureApplicationCtrl ");
    
    	
    	   
    	     
    	     
    }
   
    $scope.forgotPass = function () {
      	 $window.alert(" Password :abc");
      	
      };
      $scope.login = function (userName, pass){
   		 if ( userName === 'abc' && pass === 'abc') 
   		 {
   			 $state.go('schoolSignup');
   			
   		 }
   		 else {
   			$scope.error="Invalid UserName & password";
   		
   			    
   			  
   			
   			}
     	  
    		 
   	  };
   	 $scope.gotoSchoolSignup = function (){
   		
   			 $state.go('schoolSignup');
   			
   		 };
   		$scope.gotoUserAdmin = function (){
   	   		
  			 $state.go('userAdmin');
  			
  		 };

      $scope.rememberPass = function () {
          if ($scope.keepMe) {
              $window.alert("User Name: abc Password :abc");
          } else {
              $window.alert("CheckBox is not checked.");
          }
      };  
   

  }

})();
