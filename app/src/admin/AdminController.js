(function(){
  angular.module('admin')
         .controller('AdminController', ['$mdSidenav', '$mdBottomSheet', '$log', '$q','$scope', 'appUtils',
                                       AdminController
                                       ]);

  function AdminController($mdSidenav, $mdBottomSheet, $log, $q, $scope, appUtils) {
    var self = this;
    self.states = "";
    
    self.load = function(){
    	$log.info("Inside load of AdminController");
    }
    
  }

})();
