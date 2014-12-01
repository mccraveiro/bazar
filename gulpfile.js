var gulp = require('gulp');
var shell = require('gulp-shell');

var deploy_path = 'dist';

gulp.task('build', function () {
  gulp.src('src/**/*')
    .pipe(gulp.dest(deploy_path))
});

gulp.task('watch', function () {
  gulp.watch('src/**/*', ['build']);
});

gulp.task('default', ['watch']);