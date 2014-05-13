var gulp = require('gulp');
var gutil = require('gulp-util');
var connect = require('gulp-connect');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var es6ify = require('es6ify');

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

es6ify.traceurOverrides = { blockBinding: true };

gulp.task('scripts', function () {
  return browserify([
      es6ify.runtime,
      scriptDir + 'app.js'
    ])
    .transform(es6ify)
    .bundle({ debug: true })
    .on('error', gutil.log)
    .pipe(source('app.js'))
    .pipe(gulp.dest(distDir))
    .pipe(connect.reload());
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
  gulp.watch(styleDir + '**/*.css', ['styles']);
  gulp.watch(baseDir + 'index.html', ['html']);
});

gulp.task('default', ['scripts', 'server', 'watch']);

