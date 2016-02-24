'use strict';

angular.module('arClinicApp')
    .factory('Register', function ($resource) {
        return $resource('api/register', {}, {
        });
    });


