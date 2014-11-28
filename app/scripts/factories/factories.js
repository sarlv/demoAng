'use strict';

demoAng.factory('MainFact', function($http) {
    return {
        get: function(callback) {
            $http.get('/data.json').success(function(data) {
                callback(data);
            });
        }
    }
});