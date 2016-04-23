(function(){
  'use strict';

  angular.module('emHome')
         .service('emHomeService', ['$q' , '$http' , '$log', '$filter', emHomeService]);
  function emHomeService($q, $http , $log, $filter){
	  
	  return({
		  getEmHome : getEmHome
		});
	  
	  function getEmHome(params){
			$log.info("inside EmHome in service ");
			var request = $http({
				method:"POST",
				url:"/api/EmHome/getEmHome",
				data : params,
                headers : {
           'Content-Type' : 'application/json'
                }
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
