angular.module("route",['ngRoute'])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/a',{templateUrl:'view/new_news.html',controller:'post1'})
            .when('/b',{templateUrl:'view/jianjie.html',controller:'post2'})
             .otherwise({redirectTo:'/a'});
    }])
    .controller('post1',function ($scope) {
        //console.log($scope.posts[0].id);
    })
    .controller('post2',function ($scope) {
        /*$scope.msg = 'id: ' + $routeParams.id;*/
        console.log("1");
    });