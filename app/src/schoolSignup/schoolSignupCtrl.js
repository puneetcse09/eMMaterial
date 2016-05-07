(function(){

  angular
       .module('schoolSignup')
       .controller('schoolSignupCtrl', [
          'schoolSignupService', '$mdSidenav', '$mdBottomSheet', '$log','$scope', '$q' ,'$state', '$stateParams','$window',
          SchoolSignupCtrl
       ]);
    /*   .directive('pwCheck', function() {
        return {
            require: 'ngModel',
            link: function (scope, elem, attrs, ctrl) {
                var firstPassword = '#' + attrs.pwCheck;
                $(elem).add(firstPassword).on('keyup', function () {
                    scope.$apply(function () {
                        var v = elem.val()===$(firstPassword).val();
                        ctrl.$setValidity('pwcheck', v);
                    });
                });
            }
        }
    });*/
 

 


  function  SchoolSignupCtrl( schoolSignupService, $mdSidenav, $mdBottomSheet, $log,$scope, $q, $state, $stateParams,$window) {
    var self = this;

    self.load         = load;

    
    /**
     * Load function to initialize the current template with default services
     */
    function load(){

    $scope.gold= 0;
    $scope.platinum= 0;
    $scope.platinump= 0;
    	$log.info("Inside load of schoolSignup ");
    	 $scope.selected = [];
    	$scope.messages1 = [
{id: 1, title: "Student Management",price:1000},
{id: 2, title: "Library Management ",price:1000},
{id: 3, title: "Absence Management",price:1000},
{id: 4, title: "Communication Management",price:1000},
{id: 5, title: "Transport Management",price:1000},
{id: 6, title: "Alumini Management",price:1000},
];
    	 $scope.messages2 = [
{id: 7, title: "Timetable Management",price:1000},
{id: 8, title: "Certificate Management ",price:1000},
{id: 9, title: "Exam Management",price:1000},
{id: 10, title: "Result Management",price:1000},
{id: 11, title: "Admission Management",price:1000},
{id: 12, title: "Fees Management",price:1000},
    	                  ];    
    	 $scope.messages3 = [
{id: 13, title: "News Feed /Blogs",price:1000},
{id: 14, title: "HR Management ",price:1000},
{id: 15, title: "File Management",price:1000},
{id: 16, title: "Asset Management",price:1000},
{id: 17, title: "Hostel Management",price:1000},
{id: 18, title: "Health Management",price:1000},
{id: 19, title: "LMS (Moodle)",price:1000},
{id: 10, title: "Web Conferencing",price:1000},
      	                  ];    
    }
 $scope.sum=function(item,plan)
 {
  console.log(item,plan);
  if(item.checked)
  {
    $scope[plan]+=item.price;
  }
  else
  {
    $scope[plan]-=item.price;
  }

 }
    $scope.checkPass = function (){
    	
    	if ($scope.pass === $scope.rePass) {
    		$scope.error="Correct";
        } 
 		 else {
 			$scope.error="Password do not match";
 		
 			 }
   	  
  		 
 	  };
 	
 	 $scope.toggle2 = function (item, list) {
         var idx = list.indexOf(item);
         if (idx > -1) {
           list.splice(idx, 1);
         }
         else {
           list.push(item);
           $scope.sum=parseInt( $scope.sum)+parseInt( $scope.selected);
         }
       
       };
       $scope.exists2 = function (item, list) {
    	  
         return list.indexOf(item) > -1;
       };
       $scope.toggle3 = function (item, list) {
           var idx = list.indexOf(item);
           if (idx > -1) {
             list.splice(idx, 1);
           }
           else {
             list.push(item);
           }
         };
         $scope.exists3 = function (item, list) {
           return list.indexOf(item) > -1;
         };
         $scope.toggle1 = function (item, list) {
             var idx = list.indexOf(item);
             if (idx > -1) {
               list.splice(idx, 1);
             }
             else {
               list.push(item);
               
             }
           };
           $scope.exists1 = function (item, list) {
        	  
             return  list.indexOf(item) > -1;
           };
     
    $scope.gotoNewLogin = function ()
    {
  		 
  			 $state.go('loginPage');
  			
  		 };
     
     

  }
  
  

})();

