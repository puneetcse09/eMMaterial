(function(){
  angular
       .module('loginHome')
       .controller('loginHomeCtrl', [
          'loginHomeService', '$mdSidenav', '$mdBottomSheet', '$log','$scope', '$q' ,'$state', '$stateParams','$window',
          LoginHomeCtrl
       ]);

  function  LoginHomeCtrl( loginHomeService, $mdSidenav, $mdBottomSheet, $log,$scope, $q, $state, $stateParams,$window) {
    var self = this;

    self.load         = load;

    function load(){
    
    	$log.info("Inside load of captureApplicationCtrl ");
    
    	  var columnDefs = [
        {headerName: "Make", field: "make"},
        {headerName: "Model", field: "model"},
        {headerName: "Price", field: "price"}
    ];

    var rowData = [
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000}
    ];
 $scope.gridOptions = {
        columnDefs: columnDefs,
        rowData: rowData
    };
    	 
    	     
    	     
    }

  
    $scope.forgotPass = function () {
     	 $window.alert(" Password :abc");
     	
     };
     $scope.login = function (userName, pass){
  		 if ( userName === 'abc' && pass === 'abc') 
  		 {
  			 $state.go('schoolSignup');
  			
  		 }
  		 else {
  			$scope.error="Invalid UserName & password";
  		
  			 }
    	  
   		 
  	  };
    
     $scope.rememberPass = function () {
         if ($scope.rememberMe) {
             $window.alert("User Name: abc Password :abc");
         } else {
             $window.alert("CheckBox is not checked.");
         }
     };  

    
    

  }

})();
