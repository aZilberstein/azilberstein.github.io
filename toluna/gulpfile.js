var gulp = require('gulp');

gulp.task('default', [ 'styles']);


// SASS

var sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function () {
  return gulp.src('./scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: true
        }))
    .pipe(gulp.dest('./css/'))
    .pipe(connect.reload())
});

// Watch

var watch = require('gulp-watch');

gulp.task('watch', function(){
	gulp.watch('./scss/*.scss', ['styles']);
});

// connect-multi
var connect = require('gulp-connect-multi')();

gulp.task('connect', connect.server({
	host: '127.0.0.1',
	root: ['../'],
	port: 9090,
	livereload: true,
	open: {
		browser: 'Chrome'
	}
}));

// My worker

gulp.task('dev', ['default', 'connect', 'watch']);