'use strict';

demoAng.controller('MainCtrl', function($scope, MainFact) {

	MainFact.get(function(data) {
        $scope.data = data;
    });

});