var setPasswordModule = angular.module("setPwd",[])
setPasswordModule.controller("setPasswordController", function ($scope) {
    $scope.password = $("#getPwd").val()
    $scope.confirmPassword = $("#getPwdConfirm").val()

   /* var userData = {
        mobile:"18037367631",
        password:$scope.password,
        repassword:$scope.confirmPassword
    }
    console.log($scope.password)*/
    /*
    可以跨域请求数据，但是返回的code值为0，提示“手机格式有误”
    * */
    $scope.setPwdFinish = function(){
        alert("登陆密码"+$scope.password)
        alert("确认登录密码"+$scope.confirmPassword)
            $.ajax({
                async:false,
                url:"http://t10.beauityworld.com/YSUserAPI/register_two?mobile=18037367631&password="+$scope.password+"&repassword="+$scope.confirmPassword,
                type: "POST",
                data:{
                    mobile:"18037367631",
                    password:$scope.password,
                    repassword: $scope.repassword
                },
                dataType: 'jsonp',
                jsonp: 'jsoncallback',
                timeout: 5000,
                success: function (data) {
                    alert('successful')
                    console.log(data)
                    var json = eval(data)
                    alert(data)
                    var flag = json.code
                    alert(flag)
                    if (flag == 1){
                        document.location.href = "setPayPassword.html"
                    }
                },
                error: function(){
                    alert("error")
                }
            })
    }
})