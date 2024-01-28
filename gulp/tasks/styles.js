import autoprefixer from 'autoprefixer';
import csso from 'postcss-csso';
import postcss from 'gulp-postcss';
import sass from 'gulp-dart-sass';

export const styles = () => app.gulp.src(app.path.src.sass, { sourcemaps: true })
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: 'SASS',
      message: 'Error: <%= error.message %>'
    })
  ))
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(postcss([
    autoprefixer(),
    csso()
  ]))
  .pipe(app.plugins.rename({
    suffix: '.min'
  }))
  .pipe(app.gulp.dest(app.path.build.css, { sourcemaps: '.' }))
  .pipe(app.plugins.browsersync.stream());
