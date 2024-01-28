import fonter from "gulp-fonter";
import ttf2woff from 'gulp-ttf2woff';
import ttf2woff2 from 'gulp-ttf2woff2';

export const otfToTtf = () => {
  //Ищем файлы шрифтов .otf
  return app.gulp.src(`${app.path.srcFolder}/fonts/*.otf`, {})
    .pipe(app.plugins.plumber(
      app.plugins.notify.onError({
        title: "FONTS",
        message: "Error: <%= error.message %>"
      })
    ))
    //Конвертируем в TTF
    .pipe(fonter({
      formats: ['ttf']
    }))
    //Выгружаем в исходную папку
    .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/`))
}

export const ttfToWoff = () => app.gulp.src(app.path.src.ttf)
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: 'FONTS',
      message: 'Error: <%= error.message %>'
    })
  ))
  .pipe(ttf2woff())
  .pipe(app.gulp.dest(app.path.src.fonts))
  .pipe(app.gulp.src(app.path.src.ttf))
  .pipe(ttf2woff2())
  .pipe(app.gulp.dest(app.path.src.fonts));

export const copyWoff = () => app.gulp.src(app.path.src.woff)
  .pipe(app.gulp.dest(app.path.build.fonts));
