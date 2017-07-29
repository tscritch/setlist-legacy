(function () {

  'use strict';

  angular.module('setlist').factory('songApi', songApi);

  function songApi ($http) {
    var Song = {};



    var response =
      {
        "links":
        {
          "self": "https://api.planningcenteronline.com/services/v2/songs?where[title]=Lion"
        },
        "data":
        [
          {
             "type": "Song",
             "id": "5478025",
             "attributes":
             {
                "admin": "EMI Christian Music Publishing",
                "author": "Daniel Bashta",
                "ccli_number": 5675274,
                "copyright": "2009 worshiptogether.com songs, sixsteps Music, and Go Forth Sounds",
                "created_at": "2013-03-27T20:22:22Z",
                "hidden": false,
                "themes": ", Alive, Declaration, Proclamation",
                "title": "Like A Lion",
                "updated_at": "2014-05-21T16:58:27Z"
             },
             "links":
             {
                "self": "https://api.planningcenteronline.com/services/v2/songs/5478025"
             }
          },
          {
             "type": "Song",
             "id": "12707588",
             "attributes":
             {
                "admin": "Brentwood-Benson Music Publishing, Inc.",
                "author": "Cindy Morgan and Cova Morgan",
                "ccli_number": 5487699,
                "copyright": "2009 ©  New Spring (Admin. by Brentwood-Benson Music Publishing, Inc.), Solivia Music Publishing (Admin. by Brentwood-Benson Music Publishing, Inc.), and Remaining portion is unaffiliated",
                "created_at": "2016-08-31T22:13:32Z",
                "hidden": false,
                "themes": null,
                "title": "Lion And The Lamb",
                "updated_at": "2016-08-31T22:13:32Z"
             },
             "links":
             {
                "self": "https://api.planningcenteronline.com/services/v2/songs/12707588"
             }
          }
        ],
        "included": [],
        "meta":
        {
          "total_count": 2,
          "count": 2,
          "can_order_by":
          [
             "title",
             "created_at",
             "updated_at"
          ],
          "can_query_by":
          [
             "arrangement_name",
             "arrangement_tag_group_ids",
             "arrangement_tag_ids",
             "author",
             "bpm_max",
             "bpm_min",
             "ending_key",
             "ending_key_minor",
             "folder_id",
             "hidden",
             "key_name",
             "lyrics",
             "meter",
             "service_type_id",
             "song_tag_group_ids",
             "song_tag_ids",
             "starting_key",
             "starting_key_minor",
             "themes",
             "title"
          ],
          "parent":
          {
             "id": "31329",
             "type": "Organization"
          }
        }
      }

    Song.get = function(search) {
      return response.data;
      // return $http.get('https://' + app + ':' + secret + '@api.planningcenteronline.com/services/songs?where[title]='+search).then(function(response) {
      //   return response.data;
      // }, function(error) {
      //   return error;
      // });
    };

    return Song;
  }

})();
