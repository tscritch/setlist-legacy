(function() {

  'use strict';

  angular.module('setlist').controller('homeController', homeController);

  function homeController($scope, $cookies, $timeout, setlistFactory) {
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

    var exampleSongs = [];
    var exampleTemplates = [];

    // look for stored data else new session
    vm.songs = $cookies.getObject('songs') || exampleSongs;
    vm.templates = $cookies.getObject('templates') || exampleTemplates;
    vm.templateNumber = $cookies.get('templateNumber') || exampleTemplates.length;

    vm.pickedSongs = [];

    vm.addSong = function() {
      vm.songs.push(_.cloneDeep(newSong));
    };

    vm.templateChange = function() {

      if (vm.templates.length > vm.templateNumber && vm.templateNumber) {
        // if templates need to be deleted
        for (var i = vm.templates.length; i > vm.templateNumber; i--) {
          vm.templates.pop();
        }
      }
      else if (vm.templates.length < vm.templateNumber) {
        // if more templates need to be added
        for (var i = vm.templates.length; i < vm.templateNumber; i++) {
          vm.templates.push(_.cloneDeep(newTemplate));
          vm.templates[i].id = i;
        }
      }

    };

    vm.createSetlist = function () {
      vm.pickedSongs = setlistFactory.pickSongs(vm.songs, vm.templates);
      console.log(vm.pickedSongs);
    };

    $scope.$on('delete-song', function(e, songData) {
      var i = _.findIndex(vm.songs, function(s) { return songData.title === s.title; });
      vm.songs.splice(i, 1);
    });

    // save song list and templates to cookies
    vm.save = function () {

      if (!$scope.saving) {

        $scope.saving = true;
        $cookies.putObject('songs', vm.songs);
        $cookies.putObject('templates', vm.templates);
        $cookies.put('templateNumber', vm.templateNumber);
        $timeout(function () {
          $scope.saving = false;
        }, 1500);

      }

    };

  }

})();
