(function() {
    'use strict';

    angular
        .module('app')
        .directive('mhaButton', button);

    button.$inject = [];
    function button() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: ControllerController,
            controllerAs: 'vm',
            templateUrl: 'dist/app/controls/button.html',
            link: link,
            transclude: true,
            restrict: 'E',
            scope: {
            }
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
    function ControllerController () {
        
    }
})();