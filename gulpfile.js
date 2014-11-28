var gulp = require('gulp');
var shell = require('gulp-shell');

var deploy_path = 'dist';

gulp.task('build', function () {
  gulp.src('app/**/*')
    .pipe(gulp.dest(deploy_path))
});

gulp.task('server', ['build'], shell.task('node ' + deploy_path));

gulp.task('default', function () {
  console.log('Hey Bazar!');
});