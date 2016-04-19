(function(){
  angular.module('registerSchool')
         .controller('registerSchoolCtrl', ['$mdSidenav', '$mdDialog', '$mdBottomSheet', '$log', '$q','$scope', 'appUtils', 'homeService',
                                            RegisterSchoolCtrl
                                       ]);

  function RegisterSchoolCtrl($mdSidenav, $mdDialog , $mdBottomSheet, $log, $q, $scope, appUtils, homeService) {
    var self = this;
    self.states = "";
//    self.schoolPOJO = homeService.getSchoolPOJO();    
    self.load = function(){
    	$log.info("Inside load of RegisterSchoolCtrl >> "+self);
    	
    }
    	
  /**
   * Open Register new School dialog box
   */  
  $scope.showAddSchoolDialog = function($event) {
        $mdDialog.show({
          controller: DialogController,
          templateUrl: 'src/registerSchool/view/registerSchool.html',
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
   function DialogController($scope, $mdDialog, $log, $http, homeService) {
	   $scope.schoolObj = homeService.getSchoolPOJO();    
	   var gmapsService = new google.maps.places.AutocompleteService();
//	   var gmapsService = new google.maps.places.Autocomplete();
	   $scope.selectedGMapCity = '';
	   $scope.selectedCityDetail = '';
	   $scope.searchGMapText = '';
	   
	   $scope.hide = function() {
 	    $mdDialog.hide();
 	  	};
 	  	
 	  $scope.cancel = function() {
 	    $mdDialog.cancel();
 	  };
 	  $scope.answer = function(answer) {
 	    $mdDialog.hide(answer);
 	  };
/*==================GOOGLE ADDRESS SEARCH - START ===========================================*/
 	  /**
 	   * Initializing Google address API
 	   **/
 	 
     /**
      * Start Google Address Search for the given input
      */
     $scope.searchGoogleAddress = function(address) {
    	 var deferred = $q.defer();
    	 
    	 getGoogleAddressResults(address).then(
    			 function (predictions) {
    				 var results = [];
    				 for (var i = 0, prediction; prediction = predictions[i]; i++) {
    					 results.push(prediction);
    					 }
    				 deferred.resolve(results);
    				 }
    			 );
    	 return deferred.promise;
     	}   

     /**
      * Promising the returned result 
      */
     function getGoogleAddressResults(address) {
    	 var deferred = $q.defer();
    	 gmapsService.getQueryPredictions({input: address}, function (data) {
//     		  $log.debug("getResults >>>>>>>>> "+JSON.stringify(data));
    		 deferred.resolve(data);
     	  });
     	  return deferred.promise;
     	}
/*==================GOOGLE ADDRESS SEARCH - END ===========================================*/	  
     
     
     
     $scope.selectedGMAPAddr=function(){
//     		  $log.debug("selectedGMAPAddr >>>>>>>>> "+JSON.stringify($scope.selectedGMapCity));
//     		 $log.debug("selectedGMAPAddr >>>>>>>>> "+JSON.stringify($scope.selectedCityDetail));
     		 
     		if($scope.selectedCityDetail){
//				$log.debug("gplaceChanges : $$$$$$$$ :", $scope.selectedCityDetail.address_components);
							
				$scope.schoolObj.primaryAddress.addressPlace=$scope.selectedCityDetail.formatted_address;

				 var componentForm = {
//			                locality: 'long_name',
			                sublocality_level_1 : 'long_name',
			                sublocality_level_2 : 'long_name',
			                sublocality_level_3 : 'long_name',
			                administrative_area_level_1: 'long_name',
			                administrative_area_level_2 : 'long_name',
			                country: 'long_name',
			                postal_code : 'long_name'
			            };
//				$log.debug("$scope.selectedCityDetail.address_components >>>>>> "+JSON.stringify($scope.selectedCityDetail.address_components));
				 var name = "";
				  for (var i = 0; i < $scope.selectedCityDetail.address_components.length; i++) {
	                    var addressType = $scope.selectedCityDetail.address_components[i].types[0];
	                    if (componentForm[addressType]) {
	                        if (name !== "") {
	                            name += ", ";
	                        }
	                        var val = $scope.selectedCityDetail.address_components[i][componentForm[addressType]];
	                        name += val;
//	                        $log.debug("addressType : value  "+addressType+" : "+val);
	                        
	                        if(addressType == 'administrative_area_level_1'){
	                        	$scope.schoolObj.primaryAddress.state = val;
	                        }
	                        if(addressType == 'administrative_area_level_2'){
	                        	$scope.schoolObj.primaryAddress.city = val;
	                        }
	                        if(addressType == 'country'){
	                        	$scope.schoolObj.primaryAddress.country = val;
	                        }
	                        if(addressType == 'postal_code'){
	                        	$scope.schoolObj.primaryAddress.pincode = val;
	                        }
//	                        $log.debug("componentForm :  "+JSON.stringify(componentForm));
	                    }
	                }
//				  $log.debug("NAME >>>>>>> "+name);
			}
     	}
     	
 	 $scope.boards = [{ code: 'MP', name: 'MP Board'},
 	                  { code: 'UP', name: 'UP Board'},
 	                  { code: 'MH', name: 'Maharashtra Board'},
 	                  { code: 'CBSE', name: 'CBSE Board'},
 	                  { code: 'ICSE', name: 'ICSE Board'}];
 	 
 	 $scope.mediums = [{ code: 'Marathi', name: 'Marathi'},
 	                   { code: 'Hindi', name: 'Hindi'},
 	                   { code: 'English', name: 'English'}];
/* 	 $scope.load = function(){
 		var stateCityData;
 		$http.get('src/utils/countryStateCity.json').success(function (data){
 			stateCityData = data[0]["I"]; //data;
 			$scope.states = stateCityData;
 		});    		
 		//TODO populate board, medium and Type
 	 } */
// 	 $scope.load();
 	/* $scope.$watch('state', function(){
 		var selectedState = $scope.state;
			$scope.cities = selectedState;
 	 });*/
 	 
   	 $scope.save = function() {
//   		$log.debug("In save of DialogController");
   		$log.debug("In save of DialogController ::: schoolObj >>>>>>>>> "+JSON.stringify($scope.schoolObj));
   		/*  		
   	 try{
   			sideNavBarService.saveSchool(schoolObj)
             .then(function(response){
                 appUtils.defaultParseResponse(response, function(response){
                     $log.debug("response.responseData", response.responseData); //JSON.stringify(response.responseData)                        
                 });
             })
     	}catch(e){
     		$log.debug(e);
     	}  */  	       	
     	//hide dialog
  	    $mdDialog.hide();
  	  };
 	}
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
  }

})();
