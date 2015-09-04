var signInModule = angular.module("signIn",[])
signInModule.controller("signInController",function ($scope) {
    $scope.sendMsg = function () {
        /*
        $scope.userTel = $('#tel').val()
        $scope.userTelConfirm = $('#telConfirm').val()
        $scope.userYes = $('#yes').val()
        */
        /*
        var userData = {
            'userTel':$scope.userTel,
            'userTelConfirm':$scope.userTelConfirm,
            'userYes':$scope.userYes
        }
        */
        //alert('userTel: ' + $scope.userTel + " and userTelConfirm: " + $scope.userTelConfirm + " yes: " + $scope.userYes)

        if ($('input:radio[name="yes"]:checked').val()){
            $.ajax({
                async:false,
                url:"http://t10.beauityworld.com/YSUserAPI/user_login?user_info=18037367631&user_pwd=fanfan",
                type: "POST",
                dataType: 'jsonp',
                jsonp: 'jsoncallback',
                timeout: 5000,
                success: function (data) {
                   alert('登陆成功')
                    console.log(data)
                    document.location.href = "../../index.html"
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert(XMLHttpRequest.status);
                    alert(XMLHttpRequest.readyState);
                    alert(textStatus);
                }
            });
        }else{
            alert("不同意服务协议还怎么玩")
        }
    }
})