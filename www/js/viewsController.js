app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    	.state('welcome', {
            url: '/welcome',
            templateUrl: 'views/welcome.html',
            controller: 'welcomeController'
        })
        .state('header', {
            url: '/header',
            templateUrl: 'views/header.html',
        })
        .state('header.home', {
            url: '/header',
            templateUrl: 'views/home.html',
            controller: 'homeController'
        })
        .state('header.register', {
            url: '/register',
            templateUrl: 'views/register.html',
            controller: 'registerController'
        })
        .state('header.login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'loginController'
        })
        .state('header.profile', {
            url: '/profile',
            templateUrl: 'views/profile.html',
            controller: 'profileController'
        })
    $urlRouterProvider.otherwise('welcome');
});