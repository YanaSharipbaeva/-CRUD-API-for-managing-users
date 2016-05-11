var gulp = require('gulp'),
clean = require('gulp-clean');
jshint = require('gulp-jshint'),
qunit = require('gulp-qunit'),
useref = require('gulp-useref'),
gulpif = require('gulp-if'),
concatCss = require('gulp-concat-css'),
uglify = require('gulp-uglify'),
runSequence = require('run-sequence'),
uglifycss = require('gulp-uglifycss');

gulp.task('clean', function () {  
    return gulp.src(['./server/public', './server/fonts'], {read: false})
        .pipe(clean());
});

gulp.task('lint', ['fonts'], function () {
	return gulp.src('./client/js/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('qunit', function() {
    return gulp.src('./test/qunit-test.html')
        .pipe(qunit());
});

gulp.task('fonts', function() {
    return gulp.src(['client/fonts/MavenPro-Regular.*'])
            .pipe(gulp.dest('server/fonts/'));
});

gulp.task('build', function () {
    return gulp.src('./client/index.html')
     	.pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', uglifycss()))
        .pipe(gulp.dest('server'));
});

gulp.task('default', function(callback) {
  runSequence(['lint','qunit'], 
               'clean', 'fonts', 'build',
              callback);

});


