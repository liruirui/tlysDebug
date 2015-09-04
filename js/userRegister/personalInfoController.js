var personInfoModule = angular.module('personInfo',[])
personInfoModule.controller("personInfoController",function($scope){

    $scope.personInfoFinish = function(){
        document.location.href = "verifyMessage.html"
    }
})