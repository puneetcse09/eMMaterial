(function(){

  angular
       .module('sideNavBar')
       .controller('sideNavBarController', [
          'sideNavBarService', '$mdSidenav', '$mdBottomSheet','$mdDialog', '$log', '$q', '$state', 'appUtils',
          sideNavBarController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function sideNavBarController( sideNavBarService, $mdSidenav, $mdBottomSheet, $mdDialog, $log, $q, $state, appUtils) {
    var self = this;

    self.selected     = null;
    self.users        = [ ];
    self.selectUser   = selectUser;
    self.toggleList   = toggleUsersList;
    self.showAdd      = showAdd;
    self.showForm = showLoginForm;
//    self.showContactOptions  = showContactOptions;
    // Load all registered users

//    sideNavBarService
//          .loadAllUsers()
//          .then( function( users ) {
//            self.users    = [].concat(users);
//            self.selected = users[0];
//          });

    // *********************************
    // Internal methods
    // *********************************

    /**
     * First hide the bottomsheet IF visible, then
     * hide or Show the 'left' sideNav area
     */
    function toggleUsersList() {
      var pending = $mdBottomSheet.hide() || $q.when(true);
      
//      console.log("<<<<<< pending >>>>> "+JSON.stringify(pending));

      pending.then(function(){
        $mdSidenav('right').toggle();
      });
    }
    
    function showLoginForm(id) {
      	 $log.info("inside show form "+id);
      	var myEl = angular.element(document.querySelector(id));
      	$log.info("element is "+myEl);
      	//$(myEl).slideToggle();
        };
        
        function closeForm() {
          //$('.contactRow').slideUp();
        };

    /**
     * Select the current avatars
     * @param menuId
     */
    function selectUser ( user ) {
    	$log.info("[SideNavBarController] :::: selectUser : "+JSON.stringify(user));
    	$state.go('dashboard');
      self.selected = angular.isNumber(user) ? $scope.users[user] : user;
      self.toggleList();
    }

    /**
     * Show the bottom sheet
     */
    function showContactOptions($event) {
        var user = self.selected;

        return $mdBottomSheet.show({
          parent: angular.element(document.getElementById('content')),
          templateUrl: './src/sidenavbar/view/sideNavBar.html',
          controller: [ '$mdBottomSheet', ContactPanelController],
          controllerAs: "cp",
          bindToController : true,
          targetEvent: $event
        }).then(function(clickedItem) {
          clickedItem && $log.debug( clickedItem.name + ' clicked!');
        });

        /**
         * Bottom Sheet controller for the Avatar Actions
         */
        function ContactPanelController( $mdBottomSheet ) {
          this.user = user;
          this.actions = [
            { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
            { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'},
            { name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
            { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/svg/hangouts.svg'}
          ];
          this.submitContact = function(action) {
            $mdBottomSheet.hide(action);
          };
        }
    }
    
    //Settings
    function showAdd($event) {
        $mdDialog.show({
          controller: DialogController,
          templateUrl: 'src/admin/view/instituteDetails.html',
          targetEvent: $event,
        })
        .then(function(answer) {
        	self.alert = 'You said the information was "' + answer + '".';
        }, function() {
        	self.alert = 'You cancelled the dialog.';
        });       
    }
      
    
    function DialogController($scope, $mdDialog, $log, $http) {
    	  $scope.hide = function() {
    	    $mdDialog.hide();
    	  };
    	  $scope.cancel = function() {
    	    $mdDialog.cancel();
    	  };
    	  $scope.answer = function(answer) {
    	    $mdDialog.hide(answer);
    	  };
    	  
    	 $scope.states = [];
    	 $scope.cities = [];
    	 $scope.boards = [{ code: 'MP', name: 'MP Board'},
    	                  { code: 'UP', name: 'UP Board'},
    	                  { code: 'MH', name: 'Maharashtra Board'},
    	                  { code: 'CBSE', name: 'CBSE Board'},
    	                  { code: 'ICSE', name: 'ICSE Board'}];
    	 
    	 $scope.mediums = [{ code: 'Marathi', name: 'Marathi'},
    	                   { code: 'Hindi', name: 'Hindi'},
    	                   { code: 'English', name: 'English'}];
    	 var stateCityData = 
    	 $scope.load = function(){
    		var stateCityData;
    		$http.get('src/utils/countryStateCity.json').success(function (data){
    			stateCityData = data[0]["I"]; //data;
    			$scope.states = stateCityData;
    		});    		
    		//TODO populate board, medium and Type
    	 } 
    	 $scope.load();
    	 $scope.$watch('state', function(){
    		var selectedState = $scope.state;
 			$scope.cities = selectedState;
    	 });
    	 
      	 $scope.save = function() {
      		$log.debug("In save of DialogController");
      		$log.debug($scope.name+" And "+$scope.address);
      		var address = { street1: $scope.address,
					  		city: $scope.city.___name___,
					  		state: $scope.state.___name___,
					  		postalCode: $scope.postalCode};
      		var board = { boardName: $scope.board.name,
      					  boardAlias: $scope.board.code};
      		var medium = [{ mediumName: $scope.medium.name}];
      		var schoolObj = { name: $scope.name,
      						  board: $scope.board,
      						  medium: $scope.medium,
      						  schoolType: $scope.type,
      						  address:address,	
      						  board:board,
      						  medium:medium,
      						  description: $scope.biography};
      		
      	 try{
      			sideNavBarService.saveSchool(schoolObj)
                .then(function(response){
                    appUtils.defaultParseResponse(response, function(response){
                        $log.debug("response.responseData", response.responseData); //JSON.stringify(response.responseData)                        
                    });
                })
        	}catch(e){
        		$log.debug(e);
        	}    	       	
        	//hide dialog
     	    $mdDialog.hide();
     	  };
    	}

  }
  
  
  

})();
