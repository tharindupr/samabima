'use strict';

/**
 * @ngdoc service
 * @name talkApp.ajaxService
 * @description
 * # ajaxService
 * Service in the talkApp.
 */
angular.module('talkApp')
  .service('ajaxService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var self = this;
    self.get = function (options) {
      options.type = 'get';
      return $.ajax(options);
    };
    self.post = function (options) {
      options.type = 'post';
      return $.ajax(options);
    };

  });
