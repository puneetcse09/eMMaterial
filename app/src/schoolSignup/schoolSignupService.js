(function(){
  'use strict';

  angular.module('schoolSignup')
         .service('schoolSignupService', ['$q' , '$http' , '$log', '$filter', schoolSignupService]);
  function schoolSignupService($q, $http , $log, $filter){
	  
	  return({
		  getSchoolSignup : getSchoolSignup
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
