(function(){

  angular
       .module('addFooter')
       .controller('addFooterCtrl', [
           '$mdSidenav', '$mdBottomSheet', '$log', '$q','$scope','$mdDialog','$state',
          addFooterCtrl
       ]);
       
  
 
  function addFooterCtrl( $mdSidenav, $mdBottomSheet, $log, $q, $scope, $mdDialog,$state) {
    var self = this;

  
   self.load = load;
   
function load(){
   	$log.debug("Inside load of footerController");
   	
   }
})();



