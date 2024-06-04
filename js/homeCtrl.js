app.controller('homeCtrl',['$scope', function($scope){

    projects=[
      {
            name:"PrivateLabelLite",
            thingsILearnt:"api consumption"
        },
      {
            name:"CSP Billing",
            thingsILearnt:"internal tools"
        },
      {
            name:"AH",
            thingsILearnt:"vb.net"
        },
      {
            name:"MailParser",
            thingsILearnt:"XML Manipulation"
        },
       {
            name:"SmartGateWay",
            thingsILearnt:"Pipeline Framework"
        }
    ];
    $scope.initialize = function(){
        $scope.model = projects;
    }
    

}]);
