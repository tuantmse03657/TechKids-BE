myAngular.controller("HomeController", ["$scope", "$state", "$stateParams",
function($scope, $state, $stateParams){
  console.log();
  $scope.count = 0;
  $scope.allpages = [];
  $scope.singlepage=[];
  $scope.pagelength=$("lx").attr("size");
  $scope.girls = [
    {
      name: "Dzung",
      age: 21,
      facebook: "Dzung",
      password: "bananhtung"
    }, {
      name: "Ha",
      age: 22,
      facebook: "Ha San",
      password: "bananhtung1"
    }, {
      name: "xxxxxx",
      age: 22,
      facebook: "xxxxxxx",
      password: "xxxxxxxxxxxxxx"
    }, {
      name: "xxxxxx",
      age: 22,
      facebook: "xxxxxxx",
      password: "xxxxxxxxxxxxxx"
    }, {
      name: "xxxxxx",
      age: 22,
      facebook: "xxxxxxx",
      password: "xxxxxxxxxxxxxx"
    }, {
      name: "xxxxxx",
      age: 22,
      facebook: "xxxxxxx",
      password: "xxxxxxxxxxxxxx"
    }, {
      name: "xxxxxx",
      age: 22,
      facebook: "xxxxxxx",
      password: "xxxxxxxxxxxxxx"
    }, {
      name: "xxxxxx",
      age: 22,
      facebook: "xxxxxxx",
      password: "xxxxxxxxxxxxxx"
    }, {
      name: "xxxxxx",
      age: 22,
      facebook: "xxxxxxx",
      password: "xxxxxxxxxxxxxx"
    }, {
      name: "xxxxxx",
      age: 22,
      facebook: "xxxxxxx",
      password: "xxxxxxxxxxxxxx"
    }, {
      name: "xxxxxx",
      age: 22,
      facebook: "xxxxxxx",
      password: "xxxxxxxxxxxxxx"
    }, {
      name: "xxxxxx",
      age: 22,
      facebook: "xxxxxxx",
      password: "xxxxxxxxxxxxxx"
    }, {
      name: "xxxxxx",
      age: 22,
      facebook: "xxxxxxx",
      password: "xxxxxxxxxxxxxx"
    }, {
      name: "xxxxxx",
      age: 22,
      facebook: "xxxxxxx",
      password: "xxxxxxxxxxxxxx"
    }, {
      name: "xxxxxx",
      age: 22,
      facebook: "xxxxxxx",
      password: "xxxxxxxxxxxxxx"
    }, {
      name: "xxxxxx",
      age: 22,
      facebook: "xxxxxxx",
      password: "xxxxxxxxxxxxxx"
    }, {
      name: "xxxxxx",
      age: 22,
      facebook: "xxxxxxx",
      password: "xxxxxxxxxxxxxx"
    }, {
      name: "xxxxxx",
      age: 22,
      facebook: "xxxxxxx",
      password: "xxxxxxxxxxxxxx"
    }, {
      name: "xxxxxx",
      age: 22,
      facebook: "xxxxxxx",
      password: "xxxxxxxxxxxxxx"
    }, {
      name: "aaaaa",
      age: 22,
      facebook: "aaaaa",
      password: "xxxxxaaaxxx"
    }
  ];
  //pagination
  for(var i = 0; i<$scope.girls.length;i++)
  {
    if($scope.count == $scope.pagelength)
    {
      $scope.allpages.push($scope.singlepage);
      $scope.singlepage = [];
      $scope.count = 0;
    }
    if($scope.count<$scope.pagelength)
    {
      $scope.count ++;
      $scope.singlepage.push($scope.girls[i]);
    }
  }
  if((($scope.girls.length-1) % $scope.pagelength)>0)
  {
    $scope.allpages.push($scope.singlepage);
  }

  /////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////
  if ($stateParams.girl!=null && $stateParams.index == null) {
    $scope.girls.push($stateParams.girl);
    $scope.allpages[$scope.allpages.length-1].push($stateParams.girl);
  }
  if ($stateParams.girl!=null && $stateParams.index != null) {
    $scope.currenpage[$stateParams.index] = $stateParams.girl;
  }
  $scope.currenpage = $scope.allpages[$("lx").attr("page")-1];
  $scope.delete = function(index) {
    $scope.currenpage.splice(index, 1);
  }

  $scope.add = function() {
    $state.go("add-girl");
  }
  $scope.gotoupdate = function(index){
    $state.go('update',{girl:$scope.girls[index],index: index});
  }
  $scope.pagination = function(index){
    $scope.currenpage = $scope.allpages[index];
  }
}]);
