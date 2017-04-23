angular.module("myApp",["route"])
            .controller("mainCtrl", function ($scope, $http) {
                $scope.people = [
                    { images: "a1", name: "小王", job:"设计师，博客" },
                    { images: "a2", name: "张琳", job:"作家，杂志编辑" },
                    { images: "a3", name: "李小明", job:"艺术总监，电影剪辑" },
                    { images: "a4", name: "赵大城", job:"音乐家，运动员" }
                ];
            });