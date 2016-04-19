(function(){
  'use strict';

  angular.module('homeSummary')
         .service('HomeSummaryService', ['$q', '$http', '$log' , '$filter', HomeSummaryService]);

  /**
   * HomeSummaryService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function HomeSummaryService($q, $http, $log ,$filter){
	  
	  return({
			getHomeSearchSummary : getHomeSearchSummary
		});
	  
	  function getHomeSearchSummary(params){
			$log.info("inside getAllSchoolName in service ");
			
			var request = $http({
				method:"POST",
				url:"/api/getHomeSearchSummary",
				data : params,
                headers : {
                	'Content-Type' : 'application/json'
                }
			});
			return(request.then( handleSuccess, handleError ));
		};
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		 function handleSuccess( response ) {
//		    	$log.info("get success resp ============= "+response.data);
	            return(response.data );
	        }
		    
		    function handleError( response ) {
//		    	$log.error("error in fetching data in HomeSummaryService .......");
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
