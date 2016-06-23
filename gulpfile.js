var gulp = require('gulp');
var imageop = require('gulp-image-optimization');

gulp.task('images', function(cb) {
    gulp.src('img/**/*.+(png|jpg|gif|jpeg)').pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('img/optimized')).on('end', cb).on('error', cb);
});
