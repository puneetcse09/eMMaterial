(function(){

  angular
       .module('schoolSignup')
       .controller('schoolSignupCtrl', [
          'schoolSignupService', '$mdSidenav', '$mdBottomSheet', '$log','$scope', '$q' ,'$state', '$stateParams','$window',
          SchoolSignupCtrl
       ]);

  function  SchoolSignupCtrl( schoolSignupService, $mdSidenav, $mdBottomSheet, $log,$scope, $q, $state, $stateParams,$window) {
    var self = this;

    self.load         = load;

    
    /**
     * Load function to initialize the current template with default services
     */
    function load(){
    
    	$log.info("Inside load of schoolSignup ");
    
    	
    	   
    	     
    	     
    }
   
    $scope.gotoNewLogin = function ()
    {
  		 
  			 $state.go('loginPage');
  			
  		 };
     
     

  }

})();
