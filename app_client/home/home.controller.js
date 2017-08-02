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

    var exampleSongs = [{"title":"Have It All","speed":"slow","tags":["sacrifice","surrender"],"newtag":""},{"title":"Cannons","speed":"fast","tags":["praise","honor","glory"],"newtag":""},{"title":"Nothing is Holding Me Back","speed":"medium","tags":["surrender"],"newtag":""},{"title":"Desert Song","speed":"medium","tags":["praise","victory","storm"],"newtag":""},{"title":"Fall Afresh","speed":"medium","tags":["holy spirit","welcome"],"newtag":""},{"title":"Heartbeats","speed":"medium","tags":["praise","passion"],"newtag":""},{"title":"High Above It All","speed":"medium","tags":["storm","victory"],"newtag":""},{"title":"I Am Set Free","speed":"slowest","tags":["freedom","grace"],"newtag":""},{"title":"Jesus Paid It All","speed":"slowest","tags":["sacrifice","debt","cross"],"newtag":""},{"title":"Jesus We Love You","speed":"medium","tags":["anthem","love","grace"],"newtag":""},{"title":"King Of My Heart","speed":"medium","tags":["goodness","anchor","hope"],"newtag":""},{"title":"Lion and The Lamb","speed":"fast","tags":["sacrifce","freedom","power"],"newtag":""},{"title":"My All In All","speed":"medium","tags":["hope","storm","passion"],"newtag":""},{"title":"Resurrecting","speed":"medium","tags":["resurrection","sacrifice","praise"],"newtag":""},{"title":"Scandal Of Grace","speed":"medium","tags":["hope","sacrifice","grace"],"newtag":""},{"title":"Sinking Deep","speed":"slow","tags":["love","surrender"],"newtag":""},{"title":"Sing Out","speed":"fast","tags":["praise","holy","worthy"],"newtag":""},{"title":"The One We Love","speed":"fast","tags":["praise","truth","freedom"],"newtag":""},{"title":"This Is Amazing Grace","speed":"fast","tags":["grace","sacrifice","praise"],"newtag":""},{"title":"We Lift You High","speed":"medium","tags":["praise","surrender"],"newtag":""},{"title":"What A Beautiful Name","speed":"slow","tags":["worthy","power","truth"],"newtag":""},{"title":"Your Glory","speed":"slowest","tags":["surrender","sin","glory"],"newtag":""}];
    var exampleTemplates = [{"id":0,"speed":"fast","tag":"praise"},{"id":1,"speed":"slow","tag":"sacrifice"},{"id":2,"speed":"medium","tag":"surrender"}];

    // look for stored data else new session
    vm.songs = $cookies.getObject('songs') || exampleSongs;
    vm.templates = $cookies.getObject('templates') || exampleTemplates;
    vm.templateNumber = $cookies.get('templateNumber') || exampleTemplates.length;

    vm.pickedSongs = [];
    vm.showSetist = false;

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
      vm.showSetist = true;
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
