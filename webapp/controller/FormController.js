mainApp.controller('LoginController', function($scope, $http) {
     
    $scope.login = function(){
        $scope.email = $("#email").val();
        $scope.password = $("#password").val();
        
        obj = { 
               "email" : $scope.email,
               "password" : $scope.password
              };

            $.ajax({
              method: "POST",
              url: $scope.server + '/type-form-service/services/user.php',
              data: obj
            })
            .done(function( response ) {
                $scope.$apply(function() {
                    $scope.show = true;
                    $scope.errorMessage = response.msg;
                });
            });
        
    };
    
    $scope.show = false;
    $scope.email = "";
    $scope.password = "";
    $scope.server = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port: '');
});


