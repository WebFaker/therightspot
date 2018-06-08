// Loading dependancies -------------------------
const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const webpack = require('webpack-stream');
const rename = require('gulp-rename');

// Build tasks ----------------------------------

// ==> SCSS -------------------------------------
gulp.task('scss', function() {
    return gulp.src('src/scss/master.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(rename('master.min.css'))
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.stream());
});

// ==> Scripts ----------------------------------
gulp.task('scripts', function() {
    return gulp.src('src/js/app.js')
    .pipe(babel())
    .pipe(webpack({
        output: {
            filename: 'app.min.js'
        }
    }))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'))
    .pipe(browserSync.stream());
});

// ==> Build files ------------------------------
gulp.task('build', ['scss', 'scripts']);

// ==> Watch files ------------------------------
gulp.task('watch', function() {
    gulp.watch('src/js/**/*.js', ['scripts']);
    gulp.watch('src/scss/**/*.scss', ['scss']);
});

// ==> browserSync ------------------------------
gulp.task('default', ['build', 'watch'], function() {
    browserSync.init({
        server: {
            baseDir: './public'
        }
    });
    gulp.watch("public/*.html").on('change', browserSync.reload);
});