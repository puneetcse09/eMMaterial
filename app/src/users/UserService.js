(function(){
  'use strict';

  angular.module('users')
         .service('userService', ['$q' , '$http' , '$log' , UserService]);

  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function UserService($q, $http, $log){	  
	// Return public API.
      return({
    	  findAllTasks: findAllTasks
        /*  ,
         * addTask: addTask
         */
          
      });
      
      	var urlBase="";
  	 	var toggle=true;
  	 	var selection = [];
  	 	var statuses=['ACTIVE','COMPLETED'];
  	 	var priorities=['HIGH','LOW','MEDIUM'];
//  	 	var defaults.headers.post["Content-Type"] = "application/json";
      // ---
      // PUBLIC METHODS.
      // ---
      // I add a friend with the given name to the remote collection.
      function findAllTasks( name ) {
          var request =  $http.get(	 + '/api/tasks?archivedfalse=0').
          success(function (data) {
        	  $log.info("[findAllTasks] :::: data "+data);
              /*if (data != undefined) {
                  $scope.tasks = data;
              } else {
                  $scope.tasks = [];
              }*/
              /*for (var i = 0; i < $scope.tasks.length; i++) {
                  if ($scope.tasks[i].taskStatus == 'COMPLETED') {
                      $scope.selection.push($scope.tasks[i].taskId);
                  }
              }
              taskName="";
              taskDesc="";
              taskPriority="";
              taskStatus="";
              toggle='!toggle';*/
          });
          return( request.then( handleSuccess, handleError ) );
      }
     
      // ---
      // PRIVATE METHODS.
      // ---
      // I transform the error response, unwrapping the application dta from
      // the API response payload.
      function handleError( response ) {
          // The API response from the server should be returned in a
          // nomralized format. However, if the request was not handled by the
          // server (or what not handles properly - ex. server error), then we
          // may have to normalize it on our end, as best we can.
          if (
              ! angular.isObject( response.data ) ||
              ! response.data.message
              ) {
              return( $q.reject( "An unknown error occurred." ) );
          }
          // Otherwise, use expected error message.
          return( $q.reject( response.data.message ) );
      }
      // I transform the successful response, unwrapping the application data
      // from the API response payload.
      function handleSuccess( response ) {
          return( response.data );
      }
  }

})();
