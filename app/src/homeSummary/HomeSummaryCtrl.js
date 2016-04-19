(function(){

  angular
       .module('homeSummary')
       .controller('HomeSummaryCtrl', [
          'homeService', 'HomeSummaryService', '$mdSidenav', '$mdBottomSheet', '$log', '$q' ,'$state', '$stateParams', '$scope', '$mdDialog',
          HomeSummaryCtrl
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function HomeSummaryCtrl(homeService, HomeSummaryService, $mdSidenav, $mdBottomSheet, $log, $q, $state, $stateParams, $scope, $mdDialog) {
    var self = this;

    self.selected       = null;
    self.cities         = null;
    self.schoolSummary  = [ ];
    self.load           = load;
    self.searchText = undefined;
    self.querySearch = querySearch;
    self.newSchool = newSchool;
    self.selectedItemChange = selectedItemChange;
    self.clearSearchData = clearSearchData;
    
    function searchModal(){
		this.name = ''
		this.city = '',
		this.feeRange = '',
		this.zip  =  '',
		this.board  = '',
		this.medium  = '',
		this.category  = 'all'
    }
    
    /**
     * Load function to initialize the current template with default services
     */
    function load(){
    	self.search = new searchModal();
    	$scope.searchParams = $stateParams;
    	$log.debug("Inside load of HomeSummaryCtrl "+JSON.stringify($stateParams));  
    	self.search = $stateParams;
    	getHomeLandingData();
    	triggerSearchSummary(self.search);
    	getAllSchoolName();
    	
    	$scope.feeRange = {
        		"Average" : {
        			"key"  : "Average [Less than 2500]",
        			"value": "AVERAGE",
        		},
        		"Mediucm" : {
        			"key"  : "Medium [2500 - 5000]",
        			"value": "MEDIUM",
        		},
        		"Higher" : {
        			"key"  : "Higher [Greater than 5000]",
        			"value": "HIGHRR",
        		}
        }
    	$scope.selected = [];
    	for (var key in $scope.feeRange) {
    		if($scope.feeRange[key].value == self.search.feeRange){
    			$scope.selected.push(self.search.feeRange);
    		}
    	    /*if(list.hasOwnProperty(key)) {
    	    	$log.debug("$scope.toggle : item "+item+" \n list "+JSON.stringify(list[key]));
    	    }*/
    	}   
    	self.searchText = self.search.name;
//    	querySearch(self.search.name);
    }
  
    $scope.gotoCaptureApplication = function (data) {
    	$log.debug("In HomeSummaryCtrl  : "+JSON.stringify(data));
    	var param = {"orgName" : data.orgName};
    	$state.go('captureApplication',param);
    	
    };
    
    $scope.toggle = function (item, list) {
//    	$log.debug("In toggle  : "+JSON.stringify(item));
      var idx = list.indexOf(item);
      if (idx > -1) list.splice(idx, 1);
      else list.push(item);
    };
    
    $scope.exists = function (item, list) {
//    	$log.debug("In exists  item : "+JSON.stringify(item));
//    	$log.debug("In exists  list : "+JSON.stringify(list));
      return list.indexOf(item) > -1;
    };
    $scope.gotoSchoolDetails = function (data) {
    	$log.debug("In gotoSchoolDetails  : "+JSON.stringify(data));
    	var param = {"orgName" : data.orgName};
    	$state.go('schoolDetails',param);
    	
    };
     
    // *********************************
    // Internal methods
    // *********************************
    
    function clearSearchData(){
    	self.search = new searchModal();
    	querySearch(null);
    	self.searchText = undefined;
    	$scope.selected = [];
    	$log.debug("inside clearSearchData ....... "+JSON.stringify(self.search));
    	
    };
    
    function getHomeLandingData(){
    	try{
    		homeService.getHomeLandingData()
    		.then(function(response){
    			$log.debug("In HomeController  : "+JSON.stringify(response));
    			$scope.landingData = response;
    		     $log.debug("$scope.lamdingData : "+JSON.stringify($scope.landingData));
    		})
    	}catch(e){
    			$log.debug(e);
    		} 
    }
    function triggerSearchSummary(data){
    	$log.debug("Inside load of triggerSearchSummary "+JSON.stringify(data));    

    	try{
    		HomeSummaryService.getHomeSearchSummary(data)
    		.then(function(response){
    			$log.debug("In HomeSummaryCtrl  : "+JSON.stringify(response));
    			self.schoolSummary = response;
    		     $log.debug(" schoolSummary : "+JSON.stringify(self.schoolSummary));
    		})
    	}catch(e){
    			$log.error(e);
    		} 
    }

    $scope.selectedSchoolIndex = undefined;
    $scope.selectSchoolIndex = function(index){
    	$log.debug("In selectSchoolIndex  : "+index);
//    	
    	 if ($scope.selectedUserIndex !== index) {
    		 $scope.selectedSchoolIndex = index;
    		}
    	 else {
    		 $scope.selectedSchoolIndex = undefined;
    	}
    } 
    
    function getAllSchoolName(){
  	  try{
  	        homeService.getAllSchoolName()
  	        .then(function(response){
  	       	 $log.debug("All School Names : "+JSON.stringify(response));
  	       	 self.allSchools = response;
  	         $log.debug("All School Names : "+JSON.stringify(self.allSchools));
  	   	    })
  	       }catch(e){
  	   		$log.debug(e);
  	   	}  
  }
    
    
/****************************** This block is for Name search ******************************/
    
    
    function querySearch (query) {
        var results = query ? self.allSchools.filter( createFilterFor(query) ) : self.allSchools;
        return results;
      }

    function newSchool(school) {
      $notification.success("Success", "We got your request for : "+school+" ");
    }
    
    function selectedItemChange(item){
    	$log.debug("Item changed .."+JSON.stringify(item));
    	self.search.name = item;
    }
    
    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);
      return function filterFn(allSchools) {
        return (angular.lowercase(allSchools.name).indexOf(lowercaseQuery) === 0);
      };
    }
    /************************************ Block End ************************************/
    
    $scope.onSearchCriteriaChange= function(){
    	$log.debug("Item changed .."+JSON.stringify(self.search));
    }
    
  	
    /**
     * Open Modify School Search dialog box
     */  
    $scope.openModifySearchDialog = function($event) {
          $mdDialog.show({
            controller: modifySearchCtrl,
            templateUrl: 'src/homeSummary/view/searchModal.html',
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
     function modifySearchCtrl($scope, $mdDialog, $log, $http, homeService) {
    	 $scope.hide = function() {
    	 	    $mdDialog.hide();
    	 	  	};
    	 	  	
    	 	  $scope.cancel = function() {
    	 	    $mdDialog.cancel();
    	 	  };
     }
   
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
