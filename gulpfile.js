const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('js', () => {
	return gulp.src('src/js/app.js')
		.pipe(babel())
		.pipe(gulp.dest('public/js'));
});