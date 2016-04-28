(function(){
  'use strict';

  angular.module('loginHome')
         .service('loginHomeService', ['$q' , '$http' , '$log', '$filter', loginHomeService]);
  function loginHomeService($q, $http , $log, $filter){
	  
	  return({
		 
		});
	  
	  
		
		
		 

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
