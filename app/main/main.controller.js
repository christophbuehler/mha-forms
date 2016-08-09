(function() {
'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);
    
    function MainController() {
        var vm = this;
        
        vm.fields = [
            {
                key: 'country',
                type: 'select',
                templateOptions: {
                    label: 'Country',
                    options: [
                        {
                            name: 'Liechtenstein',
                            value: 'li'
                        }, {
                            name: 'Schweiz',
                            value: 'ch'
                        }, {
                            name: 'Deutschland',
                            value: 'de'
                        }, {
                            name: 'Frankreich',
                            value: 'fr'
                        }
                    ]
                }
            }, {
                key: 'name',
                type: 'input',
                templateOptions: {
                    type: 'text',
                    label: 'Name',
                }
            }, {
                key: 'password',
                type: 'input',
                templateOptions: {
                    type: 'password',
                    label: 'Passwort',
                }
            }
        ];

        vm.model = {};

        activate();

        ////////////////

        function activate() {
            
        }
    }
})();