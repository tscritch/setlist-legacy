(function() {

  'use strict';

  angular.module('setlist', ['ui.router', 'ui.bootstrap', 'ngCookies'])
  .config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'js/views/home/home.view.html',
        controller: 'homeController',
        controllerAs: 'home'
      }).state('about', {
        url: '/about',
        templateUrl: 'js/views/about/about.view.html',
        controller: 'aboutController',
        controllerAs: 'about'
      });

      $locationProvider.html5Mode(true);
  });

})();
