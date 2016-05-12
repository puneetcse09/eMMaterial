(function(){

  angular
       .module('navBar',['ngMaterial'])
       .controller('navBarController', [
          'navBarService', '$mdSidenav', '$mdBottomSheet', '$log', '$q','$scope','$mdDialog','$state',
          navBarController
       ]);
  
  
  function navBarController( navBarService, $mdSidenav, $mdBottomSheet, $log, $q, $scope, $mdDialog,$state) {
    var self = this;

 
   self.load = load;
   

   
   
   function load(){
    $log.debug("Inside load of navBarController");
   
   }
 $scope.gotoHome = function (){
          $state.go('emHome');
             };
  
   $scope.gotoLoginHome = function () {
    $log.debug("In gotoLoginHome  : ");
      $state.go('loginPage');
    
   };
   $scope.gotoSchoolSignup = function (){
      
       $state.go('schoolSignup');
      
     };
  
   }

})();



  
 