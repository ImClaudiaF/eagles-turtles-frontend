app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    	.state('welcome', {
            url: '/welcome',
            templateUrl: 'views/welcome.html',
            controller: 'welcomeController'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'homeController'
        })
        .state('home.register', {
            url: '/register',
            templateUrl: 'views/register.html',
            controller: 'registerController'
        })
        .state('home.login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'loginController'
        })
        .state('home.profile', {
            url: '/profile',
            templateUrl: 'views/profile.html',
            controller: 'profileController'
        })
    $urlRouterProvider.otherwise('welcome');
});