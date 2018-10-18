const gulp = require('gulp');
const babel = require('gulp-babel');
const cleancss = require('gulp-clean-css');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('scss', () => {
	return gulp.src('src/scss/master.scss')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(cleancss({ compatibility: 'ie8' }))
		.pipe(rename('master.min.css'))
		.pipe(gulp.dest('public/css'));
});

gulp.task('js', () => {
	return gulp.src('src/js/app.js')
		.pipe(babel())
		.pipe(gulp.dest('public/js'));
});