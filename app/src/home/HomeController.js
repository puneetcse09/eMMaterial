(function(){
  angular
       .module('home')
       .controller('HomeController', [
          'homeService', '$mdSidenav', '$mdBottomSheet', '$log', '$q','$scope', 'appUtils','$notification', '$stateParams', '$state', '$window',
          HomeController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function HomeController( homeService, $mdSidenav, $mdBottomSheet, $log, $q, $scope, appUtils, $notification, $stateParams, $state, $window) {
	  
	/** PUBLIC FUNCTION - START **/
    var self = this;
    self.querySearch = querySearch;
    self.newSchool = newSchool;
    self.selectedItemChange = selectedItemChange;
    self.load = load;
    self.clearSearchData = clearSearchData;
    self.searchData = searchData;
    self.search = undefined;
    self.searchText = undefined;
           
    function searchModal(){
    		this.name = ''
    		this.city = '',
    		this.feeRange = '',
    		this.zip  =  '',
    		this.board  = '',
    		this.medium  = '',
    		this.category  = 'all'
    }
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
    /** PUBLIC FUNCTION - END **/
    
    /**
     * Load function to initialize the current template with default services
     */
    function load(){
    	$log.debug("Inside load of HomeController");
    	self.search = new searchModal();
    	getHomeLandingData();
    	getAllSchoolName();
    }
   
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
    
    function searchData(){
    	$log.debug("inside searchData ....... "+JSON.stringify(self.search));
    	
    	$state.go('homeSummary', self.search);
//    	 $window.open($state.href('homeSummary', self.search, {absolute: true}), '_blank');
    };
    
    function clearSearchData(){
    	self.search = new searchModal();
    	querySearch(null);
    	self.searchText = undefined;
    	$log.debug("inside clearSearchData ....... "+JSON.stringify(self.search));
    	
    };
    
    
    self.changeSearchDataView = function(){
    	if(self.tileView){
    		self.tileView=false;
    		self.listView=true;    		
    	}else{
    		self.tileView=true;    		
    		self.listView=false;
    	}
    } ;
    

    
    // *********************************
    // Dynamic Tiles Handling
    // *********************************
    function displayDataInTiles(data){
    	var it, results = [ ];
    	
    	for(var j=0;j<data.length;j++){
    		it = angular.extend({},data[j]);
    		it.id = it.id;
            it.icon  = it.icon + (j+1);
            it.title = it.name;
            if(it.title.length>25){
            	it.title = it.title.substring(0,25)+"...";
            }
            it.background = "";
            it.span  = { row : 1, col : 1 };
            
            switch(j+1) {
            case 1:
              it.background = "red";
              it.span.row = it.span.col = 2;
              break;

            case 2: it.background = "green";         break;
            case 3: it.background = "darkBlue";      break;
            case 4:
              it.background = "blue";
              it.span.col = 2;
              break;

            case 5:
              it.background = "yellow";
              it.span.row = it.span.col = 2;
              break;

            case 6: it.background = "pink";          break;
            case 7: it.background = "darkBlue";      break;
            case 8: it.background = "purple";        break;
            case 9: it.background = "deepBlue";      break;
            case 10: it.background = "lightPurple";  break;
            case 11: it.background = "yellow";       break;
          }
            $log.debug("before pushing data : "+JSON.stringify(it));
            results.push(it);
    	}
    	return results;
    };
    
    //*********************Dynamic Tiles end*********************//
    
    
    // *********************************
    // Checkbox Handling
    // *********************************
    
    self.boardToggleSelection = function(boardName){
    	var idx = self.search.board.indexOf(boardName);
    	if (idx > -1) 
    	{
	       self.search.board.splice(idx, 1);
	     }
	     // is newly selected
	     else {
	       self.search.board.push(boardName);
	     }
    	$log.debug("selected board : "+self.search.board)
    };
    
    self.mediumToggleSelection = function(mediumName){
    	var idx = self.search.medium.indexOf(mediumName);
    	if (idx > -1) 
    	{
	       self.search.medium.splice(idx, 1);
	     }
	     // is newly selected
	     else {
	       self.search.medium.push(mediumName);
	     }
    	$log.debug("selected board : "+self.search.medium)
    };
  }

  
  /* @ngInject */
  function ControllerFunction($mdDialog) {

      var vm = this;
      vm.username = null;
      vm.password = null;

      vm.handleSubmit = handleSubmit;
      vm.handleCancel = handleCancel;

      function handleSubmit() {
          return $mdDialog.hide();
      }

      function handleCancel() {
          return $mdDialog.hide();
      }
  }
  
  
})();
