(function(){

  angular
       .module('loginHome')
       .controller('loginHomeCtrl', [
          'loginHomeService', '$mdSidenav', '$mdBottomSheet', '$log','$scope', '$q' ,'$state', '$stateParams',
          LoginHomeCtrl
       ]);

  function  LoginHomeCtrl( loginHomeService, $mdSidenav, $mdBottomSheet, $log,$scope, $q, $state, $stateParams) {
    var self = this;

    self.load         = load;

    
    /**
     * Load function to initialize the current template with default services
     */
    function load(){
    	
    	$log.info("Inside load of loginHomeCtrl ");
    
    	
    	     
    }
   
      
   

  }

})();
