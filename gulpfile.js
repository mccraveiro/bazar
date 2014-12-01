var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var shell = require('gulp-shell');

var deploy_path = 'dist';

gulp.task('build', function () {
  gulp.src('app/**/*')
    .pipe(gulp.dest(deploy_path))
});

gulp.task('server', ['build'], shell.task('node ' + deploy_path));

gulp.task('watch', function () {
  nodemon({
    "script": deploy_path,
    "verbose": true,
    "watch": ['app/']
  })
  .on('change', ['build'])
  .on('restart', function () {
    console.log('Server restarted!');
  });
});

gulp.task('default', function () {
  console.log('Hey Bazar!');
});