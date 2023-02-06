var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    filter = require('gulp-filter'),
    mocha = require('gulp-mocha');

function test () {
    return gulp.src('test/*.js', { read: false })
        .pipe(mocha({ reporter: 'spec' }));
}

function lint () {
    return gulp.src('**/*.js')
        .pipe(filter([ '*', '!node_modules/**/*']))
        .pipe(jshint({ node: true }))
        .pipe(jshint.reporter('default'));
}

exports.default = gulp.series(lint, test);