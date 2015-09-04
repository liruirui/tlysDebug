var setPayPasswordModule = angular.module("setPayPwd",[])
setPayPasswordModule.controller("setPayPasswordController", function ($scope) {
    $scope.payPassword = $('#payPassword').val()
    $scope.confirmPayPassword = $('#confirmPayPassword').val()



    /*此步骤调试成功*/
    $scope.setPayPwdFinish = function () {
        alert($scope.payPassword)
        alert($scope.confirmPayPassword)
        $.ajax({
            async:false,
            url:"http://t10.beauityworld.com/YSUserAPI/register_three?mobile=18037367631&paymentpwd="+$scope.payPassword+"&repaymentpwd="+$scope.confirmPayPassword,
            type: "POST",
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            timeout: 5000,
            success: function (data) {
                var json = eval(data)
                var flag = json.code
                if(flag == 1){
                    document.location.href = "personalInformation.html"
                }
            },
            error: function(){
                alert("error")
            }
        })
    }
})
