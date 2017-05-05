
(function () {

	'use strict';

	var gulp = require('gulp'),
		browserSync = require('browser-sync').create();

	gulp.task('browser-sync', function () {
		browserSync.init({
			server: {
				baseDir: './'
			}
		});
	});
}());