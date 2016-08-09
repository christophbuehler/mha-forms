(function() {
    'use strict';

    angular
        .module('app')
        .directive('mhaInputWrapper', inputWrapper);

    inputWrapper.$inject = [];
    function inputWrapper() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: ControllerController,
            controllerAs: 'vm',
            templateUrl: 'dist/app/controls/input-wrapper.html',
            link: link,
            transclude: true,
            restrict: 'E',
            scope: {
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