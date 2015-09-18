'use strict';

describe('Service: ajaxService', function () {

  // load the service's module
  beforeEach(module('talkApp'));

  // instantiate service
  var ajaxService;
  beforeEach(inject(function (_ajaxService_) {
    ajaxService = _ajaxService_;
  }));

  it('should do something', function () {
    expect(!!ajaxService).toBe(true);
  });

});
