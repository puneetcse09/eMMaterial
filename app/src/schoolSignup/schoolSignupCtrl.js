(function(){

  angular
       .module('schoolSignup')
       .controller('schoolSignupCtrl', [
          'schoolSignupService', '$mdSidenav', '$mdBottomSheet', '$log','$scope', '$q' ,'$state', '$stateParams',
          SchoolSignupCtrl
       ]);

  function  SchoolSignupCtrl( SchoolSignupService, $mdSidenav, $mdBottomSheet, $log,$scope, $q, $state, $stateParams) {
    var self = this;

    self.load         = load;

    
    /**
     * Load function to initialize the current template with default services
     */
    function load(){
    	
    	$log.debug("Load school data");
    	
    	     
    }
    
      
   

  }

})();
