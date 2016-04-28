(function(){
  'use strict';

  angular.module('navBar')
         .service('loginHomeService', ['$q' , '$http' , '$log', '$filter', loginHomeService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function loginHomeService($q, $http , $log, $filter){
	  
	  return({
			getMenuList : getMenuList
		});
	  
	  function getMenuList(){
			$log.info("inside getMenuList in service ");
			var request = $http({
				method:"GET",
				url:"/api/loginHome/getMenuList",
			});
			return(request.then( handleSuccess, handleError ));
		};
		
		
		
		 

		// *********************************
		// Internal methods
		// *********************************
		function handleSuccess( response ) {
//			$log.info("get success resp ============= "+response.data);       
			return(response.data );
			}
		    
		function handleError( response ) {
//		    $log.error("error in fetching data in HomeSummaryService .......");
			if (!angular.isObject( response.data ) || ! response.data.message){
	                return( $q.reject( "An unknown error occurred." ));
	            }
	            // Otherwise, use expected error message.
	            return( $q.reject( response.data.message ) );
	        }
  }

})();
