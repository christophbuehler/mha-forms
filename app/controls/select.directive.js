(function() {
    'use strict';
    
    angular
        .module('app')
        .directive('mhaSelect', select);
        
    select.$inject = [];
    function select() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: ControllerController,
            controllerAs: 'vm',
            templateUrl: 'dist/app/controls/select.html',
            link: link,
            restrict: 'E',
            scope: {
                options: "=mhaOptions",
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
        var vm = this;

        vm.setModel = function(model) {
            vm.model = model;
            vm.text = model.name;
        }
    }
})();