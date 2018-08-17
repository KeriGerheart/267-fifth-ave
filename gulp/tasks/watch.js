var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "site"
    }
  });

  watch('./site/index.html', function() {
    broswerSync.reload();
  });

  watch('./site/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  });


});

gulp.task('cssInject', ['styles'], function() {
  gulp.src('./site/temp/styles/styles.css')
    .pipe(browserSync.stream());
});
