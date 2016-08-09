(function() {
    'use strict';

    angular.module('app', [
        'formly',
        'formlyBootstrap'
    ]).run(function(formlyConfig) {
        formlyConfig.setType({
            name: 'select',
            template: '<mha-select mha-options="options.templateOptions.options" mha-model="model[options.key]" mha-label="options.templateOptions.label"></mha-select>'
        });
        formlyConfig.setType({
            name: 'button',
            template: '<mha-button mha-value="options.templateOptions.value"></mha-button>'
        });
        formlyConfig.setType({
            name: 'input',
            template: '<mha-input mha-model="model[options.key]" mha-type="options.templateOptions.type" mha-label="options.templateOptions.label"></mha-button>'
        });
    });
})();