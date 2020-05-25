const gulp = require(`gulp`);
const imagemin = require(`gulp-imagemin`);
const imageminMozjpeg = require(`imagemin-mozjpeg`);
const imageminPngquant = require(`imagemin-pngquant`);
const imageminZopfli = require(`imagemin-zopfli`);

gulp.task(`imagemin`, function() {
  return gulp
    .src([`images/*.{png,jpg}`])
    .pipe(
      imagemin([
        // png
        imageminPngquant({
          speed: 1,
          quality: [0.95, 1], // lossy settings
        }),
        imageminZopfli({
          more: true,
        }),
        // jpg
        imageminMozjpeg({
          quality: 80,
        }),
      ])
    )
    .pipe(gulp.dest(`dist/images/`));
});
