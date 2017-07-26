describe('setlist', function() {

  var $controller;

  beforeEach(angular.mock.module('ui.router'));
  beforeEach(angular.mock.module('setlist'));

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  describe('Home Controller', function() {

    var Home;

    beforeEach(function() {
      Home = $controller('homeController');
    });

    it('should exist', function() {
      expect(Home).toBeDefined();
    });


  });

});
