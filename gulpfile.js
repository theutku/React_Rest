var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('api.tsc', function () {
    var tsProject = ts.createProject('tsconfig.json', {
        watch: false,

    });
    var tsResult = tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject());
    var result = tsResult.js.pipe(sourcemaps.write(".", { sourceRoot: "../src/" })).pipe(gulp.dest('bin'));
    return result;
});

gulp.task('api.dev', ['api.tsc'], function () {
    gulp.watch('./src/**/*.ts', ['api.tsc']);
})