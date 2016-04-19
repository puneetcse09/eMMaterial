(function(){
  'use strict';

  angular.module('sideNavBar')
         .service('sideNavBarService', ['$q', '$http', '$log', sideNavBarService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function sideNavBarService($q, $http, $log){
    return({
    	saveSchool : saveSchool
    });
    
    function saveSchool(schoolObj){
		$log.info("inside saveSchool : "+JSON.stringify(schoolObj));
		//call to back end
		var request = $http({
	            method: "POST",
	            url: "/api/school",
	            data: schoolObj,
	            headers : {
	                   'Content-Type' : 'application/json'
	            }
	        });
	    return(request.then( handleSuccess, handleError ));  
    };
    
    function handleSuccess( response ) {
        return(response.data );
    }
    
    function handleError( response ) {
        if (
             !angular.isObject( response.data ) ||
                ! response.data.message
            ){
            return( $q.reject( "An unknown error occurred." ));
        }
        // Otherwise, use expected error message.
        return( $q.reject( response.data.message ) );

    }
  }

})();
