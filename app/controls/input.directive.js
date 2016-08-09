(function() {
    'use strict';

    angular
        .module('app')
        .directive('mhaInput', input);

    input.$inject = [];
    function input() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: ControllerController,
            templateUrl: 'dist/app/controls/input.html',
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {
                type: "=mhaType",
                model: "=mhaModel",
                label: "=mhaLabel"
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