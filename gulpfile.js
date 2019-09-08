var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');
var ts = require('gulp-typescript');

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./src/"
        }
    });
    browserSync.watch('./src/').on('change', browserSync.reload);

});
gulp.task('ts', function() {
    return gulp.src('./src/**/*.ts')
        .pipe(ts())
        .pipe(gulp.dest('./src/js'));
});

gulp.task('less', function() {
    return gulp.src('./src/less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('./src/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});
var lessPath = [
    './src/less/**/*.less'
]
gulp.watch(lessPath, gulp.series('less'));
gulp.watch('./src/**/*.ts', gulp.series('ts'));