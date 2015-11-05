mainApp.controller('LoginController', function($scope, $http) {
     
    $scope.login = function(){
        $scope.email = $("#email").val();
        $scope.password = $("#password").val();
        
        var req = {
                method: 'POST',
                url: $scope.server + '/type-form-service/services/user.php',
                headers: {
                  'Content-Type': 'application/json'
                },
                data: { 
                    email : $scope.email,
                    password : $scope.password
                }
               };

               $http(req).success(function(data) {
                    alert("TEST");
               })
               .error(function(data, status) {
                    console.error('Repos error', status, data);
               })
               .finally(function() {
                    console.log("finally finished repos");
               });
        
    };
     
    $scope.email = "";
    $scope.password = "";
    $scope.server = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port: '');
});


