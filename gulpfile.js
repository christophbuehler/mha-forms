'use strict';

{
    const conf = require('./gulp.config.js').config;
    const gulp = require('gulp');
    const $ = {
        watch: require('gulp-watch'),
        concat: require('gulp-concat'),
        if: require('gulp-if'),
        sass: require('gulp-sass'),
        path: require('path'),
        uglify: require('gulp-uglify'),
        rename: require('gulp-rename')
    };
    
    const pipes = {
        concat: (pipe, settings) => {
            return pipe.pipe(
                $.concat(`${settings.bundleKey}.${settings.resolve}`));
        },
        copy: (pipe, settings) => {
            return pipe.pipe(
                gulp.dest(settings.dest));
        },
        all: (pipe, settings) => {
            settings.dest = settings.conf.dest;
            return gulp.src(`${settings.bundle.root}${settings.watcher.match}`);
        },
        sass: (pipe, settings) => {
            return pipe.pipe(
                $.sass());
        },
        uglify: (pipe, settings) => {
            return pipe.pipe($.rename(path => {
                path.basename += '.min';
            })).pipe(
                $.uglify());
        }
    };

    gulp.task('build', function() {});
    gulp.task('watch', taskWatch(conf, pipes, $, gulp));
    gulp.task('cd', taskCd(conf, pipes, $, gulp));

    gulp.task('develop', [
        'build',
        'watch',
        'cd'
    ]);
}

function taskWatch(conf, pipes, $, gulp) {
    return () => {
        for (let bundleKey in conf.bundles) {
            let bundle = conf.bundles[bundleKey];
            
            for (let watcherKey in conf.watchers) {
                let watcher = conf.watchers[watcherKey];
                let matchers = [ `${bundle.root}${watcher.match}` ];

                // this bundle has custom matchers
                if (bundle[watcherKey]) {
                    matchers = bundle[watcherKey].map(matcher => {
                        return `${bundle.root}${matcher}`;
                    })
                }

                $.watch(matchers, file => {
                    let pipe = gulp.src(file.path);
                    let settings = {
                        watcher,
                        bundle,
                        bundleKey,
                        watcherKey,
                        conf,
                        resolve: watcher.resolve,
                        dest: `${conf.dest}/${$.path.dirname($.path.relative(__dirname, file.path))}`
                    };

                    console.log(file.path);

                    watcher.pipes.forEach(watcherPipe => {
                        pipe = pipes[watcherPipe](pipe, settings).on('error', error);
                    });
                });
            }
        }
    };

    function error(err) {
        console.log(err.toString());
        this.emit('end');
    }
}

function taskCd(conf, pipes, $, gulp) {
    return () => {
        if (!conf.cd) return false;
        $.watch(`${conf.cd.root}${conf.cd.match}`, file => {
            let pipe = gulp.src(file.path);
            pipes.copy(pipe, conf.cd);
        });
    };
}