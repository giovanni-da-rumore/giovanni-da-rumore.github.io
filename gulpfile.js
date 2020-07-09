var gulp = require('gulp'),
	sass = require('gulp-sass'),
 	sourcemaps = require('gulp-sourcemaps'),
 	uglify = require('gulp-uglify'),
	gutil = require('gulp-util'),
   	concat = require('gulp-concat'),
   	plumber = require('gulp-plumber'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  gulp.src(['main.scss'])
	.pipe(sourcemaps.init())
	.pipe(concat('main.css'))
    .pipe(sourcemaps.write())
	.pipe(autoprefixer())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('javascript', function () {
	gulp.src('main.js')
		.pipe(plumber())
        .pipe(sourcemaps.init())
		.pipe(concat('app.js'))
        .pipe(sourcemaps.write())
		// .pipe(uglify().on('error', gutil.log))
		.pipe(gulp.dest('assets/build'))
});

gulp.task('sass:watch', function () {
  gulp.watch('main.scss', ['sass']);
});

gulp.task('js:watch', function () {
	gulp.watch('main.js', ['javascript'])
})


gulp.task('default', ['sass', 'sass:watch', 'javascript', 'js:watch']);
