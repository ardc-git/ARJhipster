'use strict';

angular.module('arClinicApp')
    .factory('errorHandlerInterceptor', function ($q, $rootScope) {
        return {
            'responseError': function (response) {
                if (!(response.status == 401 && response.data.path.indexOf("/api/account") == 0 )){
	                $rootScope.$emit('arClinicApp.httpError', response);
	            }
                return $q.reject(response);
            }
        };
    });