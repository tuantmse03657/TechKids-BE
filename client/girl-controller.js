myAngular.controller("GirlController", ["$scope", "$state", "$stateParams","$http",
function($scope, $state, $stateParams,$http){
  $scope.girl = {};
  $scope.index = -1;
  if ($stateParams.girl) {
    $scope.type = "Update";
    $scope.index = $stateParams.index;
    $scope.girl = $stateParams.girl;
  }
  else if($stateParams.type){
    $scope.type = $stateParams.type;
    $scope.index = $stateParams.index;
  }
  else {
    $scope.type = "Add";
  }

  $scope.addOrUpdate = function() {
    if($scope.type == "Add"){
      $http.post('/api/hot-girl',{girl:$scope.girl}).then(function(res){
        console.log("add sucessfully!");
        $state.go("home");
      })
    }
    if($scope.type == "Update"){
      $http.post('/api/hot-girl',{girl:$scope.girl,index:$scope.index}).then(function(res){
        console.log("add sucessfully!");
        $state.go("home");
      })
    }
    if($scope.type == "Insert"){
      $http.post('/api/hot-girl',{girl:$scope.girl,index:$scope.index,type:$scope.type}).then(function(res){
        console.log("add sucessfully!");
        $state.go("home");
      })
    }

  }

  $scope.cancel = function() {
    $state.go("home");
  }
}]);
