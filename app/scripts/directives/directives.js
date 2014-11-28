'use strict';

demoAng.directive('mainDirect', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.on('click', function(e) {
                // TO DO
            })
        }
    }

});

demoAng.directive('aboutDirect', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.on('click', function(e) {
                $(this).next().append('<strong>about.html page</strong>')
            })
        }
    }

});