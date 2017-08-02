(function () {

  'use strict';

  angular.module('setlist').factory('setlistFactory', setlistFactory);

  function setlistFactory () {
    var Setlist = {};

    Setlist.pickSongs = function (songlist, templateSongs) {

      var pickedSongs = [];

      // var tags = getTags(songlist);

      var tagSongs = [];
      var tempSongs = [];

      // each template song
      for(var i = 0; i < templateSongs.length; i++) {
        // reset
        tempSongs = [];
        // find tags
        if (templateSongs[i].tag) {
          tagSongs = findSongsWithTag(songlist, templateSongs[i].tag);
          tempSongs = findSongsWithSpeed(tagSongs, templateSongs[i].speed);
        }
        // if no tags look in the song list for songs with similar speed
        else {
          tempSongs = findSongsWithSpeed(songlist, templateSongs[i].speed);
        }

        if (tempSongs.length > 1) {
          pickedSongs.push(chooseSong(tempSongs));
        }
        else {
          pickedSongs.push(tempSongs[0]);
        }
      }

      return pickedSongs;
    };

    function findSongsWithTag(songlist, tag) {
      var foundSongs = [];

      foundSongs = _.filter(songlist, function(song) {
        return _.find(song.tags, function(t) {
          return t === tag || t.includes(tag) || tag.includes(t);
        });

      });

      return foundSongs;
    }

    function findSongsWithSpeed(songlist, speed) {
      var foundSongs = [];

      foundSongs = _.filter(songlist, function(song) {
        return song.speed === speed;
      });

      return foundSongs;
    }

    function chooseSong(songs) {
      // get random value to choose a song
      var rand = Math.floor(Math.random() * (songs.length));

      return songs[rand];
    }

    Setlist.getTags = function (songs) {

    };

    return Setlist;

  }
})();

// for every song
//
//   find tags first if no tags then move on
//
//   find songs of similar speed
