'use strict';

describe('Controller: TrendsCtrl', function () {

  // load the controller's module
  beforeEach(module('mcHacksApp'));

  var TrendsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TrendsCtrl = $controller('TrendsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
