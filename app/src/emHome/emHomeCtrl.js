(function(){

  angular
       .module('emHome')
       .controller('emHomeCtrl', [
           '$mdSidenav', '$mdBottomSheet', '$log','$scope', '$q' ,'$state', '$stateParams',
          EmHomeCtrl
       ]).directive( 'appHeader', function() {
  return {
     restrict: 'E',
     
       templateUrl: "/src/navbar/view/navBar.html"
  };
}).directive( 'appFooter', function() {
  return {
     restrict: 'E',
     
       templateUrl: "/src/addFooter/view/addFooter.html"
  };
});

  function  EmHomeCtrl( $mdSidenav, $mdBottomSheet, $log,$scope, $q, $state, $stateParams) {
    var self = this;

    self.load         = load;

    function load(){
   
    	$log.info("Inside load of EmHomeCtrl ");

    }

    }

})();
