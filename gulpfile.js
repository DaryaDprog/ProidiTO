let gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename');
    

gulp.task('scss', function() {
    return gulp.src('scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('html', function() {
    return gulp.src('*.html')
    .pipe(browserSync.reload({stream: true}))
})

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', function(){
    gulp.watch('scss/**/*.scss', gulp.parallel('scss'));
    gulp.watch('*.html', gulp.parallel('html'))
});

gulp.task('default', gulp.parallel('scss','browser-sync', 'watch'));