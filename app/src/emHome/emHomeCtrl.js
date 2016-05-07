(function(){

  angular
       .module('emHome')
       .controller('emHomeCtrl', [
          'emHomeService', '$mdSidenav', '$mdBottomSheet', '$log','$scope', '$q' ,'$state', '$stateParams',
          EmHomeCtrl
       ]).directive( 'appHeader', function() {
  return {
     restrict: 'E',
     
       templateUrl: "/src/navBar/view/navBar.html"
  };
}).directive( 'appFooter', function() {
  return {
     restrict: 'E',
     
       templateUrl: "/src/addFooter/view/addFooter.html"
  };
});

  function  EmHomeCtrl( EmHomeService, $mdSidenav, $mdBottomSheet, $log,$scope, $q, $state, $stateParams) {
    var self = this;

    self.load         = load;

    
    /**
     * Load function to initialize the current template with default services
     */
    function load(){
    	$scope.searchParams = $stateParams;
    	$log.info("Inside load of EmHomeCtrl "+JSON.stringify($stateParams));
    	getEmHome($scope.searchParams);
    }

    function getEmHome(params){
    	$log.debug("In getEmHome params  : "+JSON.stringify(params));
		
    	try{
    		emHomeService.getEmHome(params)
    		.then(function(response){
    			$log.debug("In EmHomeCtrl  : "+JSON.stringify(response));
    			$scope.emHomeData = response[0];
    		     $log.debug("$scope.emHomeData : "+JSON.stringify($scope.emHomeData));
    		})
    	}catch(e){
    			$log.debug(e);
    		} 
    } 
      
   

  }

})();
