(function() {

  'use strict';

  angular.module('setlist').controller('songController', songController);

  function songController($scope) {
    var vm = this;

    vm.speeds = ['slowest', 'slow', 'medium', 'fast'];

    vm.tagTemplate = '/js/views/directives/song/tag.template.html';

    console.log($scope.songData.tags);

    $scope.setSpeed = function(speed) {
      $scope.songData.speed = speed;
    };

    $scope.removeTag = function(tag) {
      console.log(tag);
      var i = _.findIndex($scope.songData.tags, tag);
      _.remove($scope.songData.tags, function(t) { return t === tag; });
    };

    $scope.$watch('popoverIsOpen', function(newval) {
      if ($scope.songData.newtag === '' && !$scope.popoverIsOpen) {
        $scope.songData.tags.pop();
      }
      else if ($scope.songData.newtag !== '' && $scope.songData.newtag !== undefined && !$scope.popoverIsOpen) {
        $scope.songData.tags.push($scope.songData.newtag);
        $scope.songData.newtag = '';
      }
    });

  }

})();
