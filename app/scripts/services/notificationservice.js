'use strict';

/**
 * @ngdoc service
 * @name talkApp.notificationService
 * @description
 * # notificationService
 * Service in the talkApp.
 */
angular.module('talkApp')
  .service('notificationService', function (ajaxService) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var self = this;
    self.notification = "val"

    self.testGitUrl = function (data, callback) {
      return ajaxService.get({
        url: 'https://api.github.com/users/mralexgray/repos',
        data: data,
        dataType: 'json'
      }).done(function (result) {
        if (typeof callback === "function")
          callback(result);
      });
    };

  });
