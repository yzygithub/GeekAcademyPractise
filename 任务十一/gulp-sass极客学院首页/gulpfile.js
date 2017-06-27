
var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('sass', function() {
    return gulp.src('./scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'));//文件夹可以生成
});

gulp.task('sass:watch', function () {
  gulp.watch('./scss/*.scss', ['sass']);
});

gulp.task('autoprefixer', ['sass'],function () { 
  var autoprefixer = require('gulp-autoprefixer');
  return gulp.src('./css/*.css')
    .pipe([ autoprefixer({ browsers: ['last 4 versions'] }) ])
    .pipe(gulp.dest('./css'));
});

var cleanCSS = require('gulp-clean-css');
gulp.task('minify-css', function() {
  return gulp.src('./css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./min-css'));
});

gulp.task('default', function(){
    gulp.run('sass','sass:watch','minify-css');
});

