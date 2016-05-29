(function(){


  angular
       .module('userAdmin')
       .controller('userAdminCtrl'
       ,function ($scope, $timeout, $mdSidenav, $log,$state,$mdDialog) {
 


   var originatorEv;
    this.openMenu = function($mdOpenMenu, ev) {
      originatorEv = ev;
      $mdOpenMenu(ev);
    };
      this.announceClick = function(index) {
      $mdDialog.show(
        $mdDialog.alert()
          .title('You clicked!')
          .textContent('You clicked the menu item at index ' + index)
          .ok('Nice')
          .targetEvent(originatorEv)
      );
      originatorEv = null;
    };    
            $scope.isToolbar=true;
            $scope.drop =true;
           $scope.name = 'John';
    	    $scope.toggleLeft = buildDelayedToggler('left');
    	    $scope.toggleRight = buildToggler('right');
          $scope.isOpenRight = function(){
            return $mdSidenav('right').isOpen();
          };
          $scope.user = [
{id: 1, name: "David Belle"},
{id: 2, name: "Glen jacobs "},
{id: 3, name: "Bill phillips"},
{id: 4, name: "Jonathan morris"},
{id: 5, name: "Fedric metchell"},
{id: 6, name: "Teena bell"},
];            
 $scope.user1 = [
{id: 1, name: "Toggle Full Screen"},
{id: 2, name: "Clear Local Storage "},
{id: 3, name: "Privacy Setting"},
{id: 4, name: "Other Setting"}

];                  
          $scope.gotoHome = function (){
          $state.go('emHome');
             };
    	   
    
    function debounce(func, wait, context) {
      var timer;
      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }
  
    function buildDelayedToggler(navID) {
      return debounce(function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }, 200);
    }
    function buildToggler(navID) {
      return function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }
    }
       })
  .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });
    };
  }) .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };
  });
  
 

})();
