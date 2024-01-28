import cheerio from 'gulp-cheerio';
import svgmin from 'gulp-svgmin';
import svgstore from 'gulp-svgstore';

const svgOptions = {
  plugins: [{
    name: 'removeDoctype',
    active: true,
  }, {
    name: 'removeXMLNS',
    active: true,
  }, {
    name: 'removeXMLProcInst',
    active: true,
  }, {
    name: 'removeComments',
    active: true,
  }, {
    name: 'removeMetadata',
    active: true,
  }, {
    name: 'removeEditorNSData',
    active: true,
  }, {
    name: 'removeViewBox',
    active: false,
  }]
};
export const sprite = () => app.gulp.src(app.path.src.sprite)
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: 'SPRITE',
      message: 'Error: <%= error.message %>'
    })
  ))
  .pipe(svgmin(svgOptions))
  .pipe(cheerio({
    run: function ($) { // eslint-disable-line object-shorthand
      // $('[fill]').removeAttr('fill');
      // $('[stroke]').removeAttr('stroke');
      $('[style]').removeAttr('style');
    },
    parserOptions: { xmlMode: true }
  }))
  .pipe(svgstore({
    inlineSvg: true
  }))
  .pipe(app.plugins.rename('sprite.svg'))
  .pipe(app.gulp.dest(app.path.build.sprite))
  .pipe(app.plugins.browsersync.stream());

export const svg = () => app.gulp.src(app.path.src.svg)
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: 'SVG',
      message: 'Error: <%= error.message %>'
    })
  ))
  .pipe(svgmin(svgOptions))
  .pipe(app.gulp.dest(app.path.build.svg));
