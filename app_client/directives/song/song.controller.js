(function() {

  'use strict';

  angular.module('setlist').controller('songController', songController);

  function songController($scope) {
    var vm = this;

    vm.title = 'Lion and the Lamb';
    vm.speed = 'fast';
    vm.tags = ['sacrifice', 'honor'];

  }

})();
