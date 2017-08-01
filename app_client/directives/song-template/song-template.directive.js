(function() {

  'use strict';

  angular.module('setlist').directive('songTemplate', songTemplate);

  function songTemplate() {
    return {
      restrict: 'E',
      scope: {
        template: '=template'
      },
      templateUrl: '/js/views/directives/song-template/song-template.template.html',
      controller: 'songTemplateController as songTempCtrl'
    };
  }

})();
