 'use strict';

angular.module('arClinicApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-arClinicApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-arClinicApp-params')});
                }
                return response;
            }
        };
    });
