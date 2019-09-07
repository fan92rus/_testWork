var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./src/"
        }
    });
    browserSync.watch('./src/').on('change', browserSync.reload);

});

gulp.task('less', function () {
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