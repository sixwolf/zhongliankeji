
var culture=angular.module('s7.com',[])
culture.controller('companyController', function ($scope,$http) {

   /* $http.post('json/news.json','', function (data){
        $scope.data=data[0];
        //console.log(data[0]);
    })*/
    $http.get('json/news.json').success(function (data) {
        $scope.data=data[0];
        //console.log(data);
    })
   /* $.post('json/news.json','', function (data) {
        for (var i = 0; i < 8; i++) {
            var title='title'+i;
            var text='text'+i;
            var src='src'+i;
            $scope[title]=data[0][title];
            $scope[text]=data[0][text];
            $scope[src]=data[0][src];

        }
    })*/
})
