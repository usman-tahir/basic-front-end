
(function () {

	'use strict';

	var gulp = require('gulp'),
		browserSync = require('browser-sync').create(),
		sass = require('gulp-sass');

	// gulp.task('browser-sync', function () {
	// 	browserSync.init({
	// 		server: {
	// 			baseDir: './'
	// 		}
	// 	});
	// });

	// Create the static server, and watch SASS/HTML files
	gulp.task('serve', ['sass'], function () {
		browserSync.init({
			server: './app'
		});

		gulp.watch('app/scss/*.scss', ['sass']);
		gulp.watch('app/*.html').on('change', browserSync.reload);
	});

	// Compile sass into CSS, and inject it into the browser
	gulp.task('sass', function () {
		return gulp.src('app/scss/*.scss')
			.pipe(sass())
			.pipe(gulp.dest('app/css'))
			.pipe(browserSync.stream())
	});

	gulp.task('default', ['serve']);
}());