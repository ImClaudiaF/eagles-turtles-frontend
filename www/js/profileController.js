app.controller('profileController', function($http, $scope, $state, $sce) {
    $scope.profileInfo = function() {
        alert('hola');
        // var params = {
        //     username: localStorage.getItem('username'),
        //     token: localStorage.getItem('token')
        // }
        // $http.get("http://192.168.0.155:10000/info/" + params.username + "/" + params.token)
        //     .success(function(data) {
        //         console.log(data);
        //         $scope.name = data.info.user_name;
        //         $scope.lastname = data.info.user_lastname;
        //         $scope.cant = data.pictures.length;
        //         $scope.username = localStorage.getItem('username');
        //         $scope.uploads = data.pictures.map(function(el) {
        //             el.mediaUrl = "http://192.168.0.155:10000/" + el.publish_url + "/" + el.publish_filename;
        //             el.mediaUrl = $sce.trustAsResourceUrl(el.mediaUrl);
        //             return el;
        //         });
        //     });
    };
    $scope.logout = function() {
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        $state.transitionTo('home.login');
    };
});
