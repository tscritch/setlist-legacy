(function() {

  'use strict';

  angular.module('setlist').controller('homeController', homeController);

  function homeController($window, $scope, songApi) {
    var vm = this;

    var newSong = {
      title: '',
      speed: '',
      tags: []
    };

    var newTemplate = {
      id: 0,
      speed: '',
      tag: ''
    };

    vm.songs = [];
    vm.templates = [];

    vm.addSong = function() {
      vm.songs.push(_.cloneDeep(newSong));
    };

    vm.templateChange = function() {
      vm.templates = [];
      for (var i = 0; i < vm.templateNumber; i++) {
        vm.templates.push(_.cloneDeep(newTemplate));
        vm.templates[i].id = i;
      }
    };

    vm.createSetlist = function () {
      console.log('setlist created');
    };

    $scope.$on('delete-song', function(e, songData) {
      var i = _.findIndex(vm.songs, function(s) { return songData.title === s.title; });
      vm.songs.splice(i, 1);
    });

  }

})();
