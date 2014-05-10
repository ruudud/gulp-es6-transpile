var gulp = require('gulp');
var concat = require('gulp-concat');
var es6transpiler = require('gulp-es6-transpiler');
var connect = require('gulp-connect');

var baseDir = './app/';
var scriptDir = baseDir + 'scripts/';
var styleDir = baseDir + 'styles/';
var distDir = baseDir + 'dist/';

gulp.task('server', function() {
  connect.server({
    root: baseDir,
    port: 3000,
    livereload: true
  })
});

gulp.task('scripts', function () {
  return gulp.src(scriptDir + '**/*.js')
    .pipe(es6transpiler())
    .pipe(concat('main.js'))
    .pipe(gulp.dest(distDir));
});


gulp.task('html', function() {
  gulp.src(baseDir + 'index.html')
    .pipe(connect.reload());
});

gulp.task('styles', function() {
  gulp.src(styleDir)
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(scriptDir + '**/*.js', ['scripts']);
  gulp.watch(baseDir + 'index.html', ['html']);
  gulp.watch(styleDir, ['styles']);
});

gulp.task('default', ['scripts', 'server', 'watch']);

