'use strict';

exports.config = {
    bundles: {
        app: {
            root: './app'
        },
        libs: {
            root: './bower_components',
            scripts: [
                '/api-check/dist/api-check.js',
                '/angular/angular.min.js',
                '/angular-formly/dist/formly.min.js',
                '/angular-formly-templates-bootstrap/dist/angular-formly-templates-bootstrap.min.js'
            ],
            styles: []
        }
    },
    watchers: {
        styles: {
            match: '/**/*.{scss,sass,css}',
            resolve: 'css',
            pipes: [
                'all',
                'sass',
                'concat',
                'copy'
            ]
        },
        scripts: {
            match: '/**/*.js',
            resolve: 'js',
            pipes: [
                'all',
                'concat',
                'uglify',
                'copy'
            ]
        },
        html: {
            match: '/**/*.html',
            pipes: [
                'copy'
            ]
        }
    },
    cd: {
        root: './dist',
        dest: './server/',
        match: '/**/*.*'
    },
    dest: './dist'
};