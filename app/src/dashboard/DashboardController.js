(function(){

  angular
       .module('dashboard')
       .controller('DashboardController', [
          'DashboardService', '$mdSidenav', '$mdBottomSheet', '$log', '$q' ,'$state', '$stateParams',
          DashboardController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function DashboardController( DashboardService, $mdSidenav, $mdBottomSheet, $log, $q, $state, $stateParams) {
    var self = this;

    self.selected     = null;
    self.Dashboards   = [ ];
    self.load         = load;
//    self.selectDashboard   = selectDashboard;
//    self.toggleList   = toggleDashboardsList;
//    self.showContactOptions  = showContactOptions;

    
    /**
     * Load function to initialize the current template with default services
     */
    function load(){
    	$log.info("Inside load of DashboardController "+JSON.stringify($stateParams));
    	
    }
    
    // Load all registered Dashboards

    DashboardService
          .loadAllDashboards()
          .then( function( Dashboards ) {
            self.Dashboards    = [].concat(Dashboards);
            self.selected = Dashboards[0];
          });

    // *********************************
    // Internal methods
    // *********************************

    /**
     * First hide the bottomsheet IF visible, then
     * hide or Show the 'left' sideNav area
     */
    function toggleDashboardsList() {
      var pending = $mdBottomSheet.hide() || $q.when(true);
      
//      console.log("<<<<<< pending >>>>> "+JSON.stringify(pending));

      pending.then(function(){
        $mdSidenav('right').toggle();
      });
    }

 

  }

})();
