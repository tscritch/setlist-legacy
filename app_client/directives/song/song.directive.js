(function() {

  'use strict';

  angular.module('setlist').directive('song', song);

  function song() {
    return {
      restrict: 'E',
      scope: {
        songData: '=songData'
      },
      templateUrl: '/js/views/directives/song/song.template.html',
      controller: 'songController as songCtrl'
    };
  }

})();
