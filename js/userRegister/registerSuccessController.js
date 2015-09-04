var registerSuccessModule  = angular.module('registerSuccess',[])
registerSuccessModule.controller("registerSuccessController", function ($scope) {
    $scope.insertDB = function () {
        alert("走你")
            $.ajax({
                async:false,
                url:"http://t10.beauityworld.com/YSUserAPI/getUserMtRandAccountById?mobile=18037367631",
                type: "POST",
                dataType: 'jsonp',
                jsonp: 'jsoncallback',
                timeout: 5000,
                success: function (data) {
                    alert('注册成功')
                    console.log(data)
                },
                error: function(){
                    alert("注册失败")
                }
            })
    }
})