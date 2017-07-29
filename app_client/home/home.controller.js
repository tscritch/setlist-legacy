(function() {

  'use strict';

  angular.module('setlist').controller('homeController', homeController);

  function homeController($window, songApi) {
    var vm = this;
    vm.message = "Sup, Layne!";

    vm.search = '';

    vm.songs = [];

    // Get login for planning center
    vm.login = function () {
      console.log('login');
      $window.open('https://api.planningcenteronline.com/oauth/authorize?client_id=b027982271b5360d55a7fc17df4470af00ffa5c6ec5ccea2c47c418da78adc53&redirect_uri=https://setlist.tadscritchfield.com&response_type=code&scope=services')
    };

    vm.getSongList = function (value) {
      console.log(songApi.get(value));
      return songApi.get(value);//.then(function (response) {return response;});
    };

    vm.selectSong = function(item) {
      console.log(item);
      vm.songs.push(item);
    };

  }

})();
