(function(){

  angular
       .module('navBar')
       .controller('navBarController', [
          'navBarService', '$mdSidenav', '$mdBottomSheet', '$log', '$q','$scope','$mdDialog','$state',
          navBarController
       ]);
  
  /**
   * Nav Bar Controller for the App
   * @param $scope
   * @param $mdSidenav
   * @param navBarService
   * @constructor
   */
  function navBarController( navBarService, $mdSidenav, $mdBottomSheet, $log, $q, $scope, $mdDialog,$state) {
    var self = this;

   self.toggleList   = toggleUsersList;
   self.openLoginPanel  = openLoginPanel;
   self.openMenu = openMenu;
   self.load = load;
   
   
   
   /**
    * Load function to initialize the current template with default services
    */
   function load(){
   	$log.debug("Inside load of navBarController");
   	getMenuList();
   }
  
   $scope.gotoLoginHome = function () {
   	$log.debug("In gotoLoginHome  : ");
   		$state.go('loginHome');
   	
   };
    // *********************************
    // Internal methods
    // *********************************
   
   
   function getMenuList(){
   	try{
   		navBarService.getMenuList()
   		.then(function(response){
   			$log.debug("In getMenuList  : "+JSON.stringify(response));
   			$scope.menuData = response;
   		     $log.debug("$scope.getMenuList : "+JSON.stringify($scope.landingData));
   		})
   	}catch(e){
   			$log.debug(e);
   		} 
   }
   
   var originatorEv;
   function openMenu($mdOpenMenu, ev) {
     originatorEv = ev;
     $mdOpenMenu(ev);
   };
   
   function openLoginPanel($event){
		$log.debug("inside nav bar openLoginPanel .........");
		 $mdDialog.show({
	          controller: DialogController,
	          templateUrl: 'src/navbar/view/login.html',
	          targetEvent: $event,
	        })
	        .then(function(answer) {
	        	self.alert = 'You said the information was "' + answer + '".';
	        }, function() {
	        	self.alert = 'You cancelled the dialog.';
	        });     
   }
   
   /**
    * Internal Controller for Dialog box
    */
    function DialogController($scope, $mdDialog, $log, $http) {
    	
    	$scope.loginData = {
    			"username" : "",
    			"password" : ""
    	}
        $scope.handleSubmit = handleSubmit;
        $scope.handleCancel = handleCancel;

        function handleSubmit() {
            return $mdDialog.hide();
        }

        function handleCancel() {
            return $mdDialog.hide();
        }
    }
    
   
    /**
     * First hide the bottomsheet IF visible, then
     * hide or Show the 'left' sideNav area
     */    
    function toggleUsersList() {
    	$log.debug("inside nav bar toggle .........");
      var pending = $mdBottomSheet.hide() || $q.when(true);
      
      $log.debug("<<<<<< pending >>>>> "+JSON.stringify(pending));

      pending.then(function(){
        $mdSidenav('right').toggle();
      });
    }
    



  }

})();
