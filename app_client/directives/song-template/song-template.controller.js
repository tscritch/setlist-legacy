(function() {

  'use strict';

  angular.module('setlist').controller('songTemplateController', songTemplateController);

  function songTemplateController($scope) {
    var vm = this;

    vm.speeds = ['slowest', 'slow', 'medium', 'fast'];

    $scope.setSpeed = function(speed) {
      $scope.template.speed = speed;
    };

  }

})();
