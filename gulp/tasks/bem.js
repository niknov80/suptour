import bemlinter from 'gulp-html-bemlinter';

export const lintBem = () => app.gulp.src(app.path.build.htmlValidate)
  .pipe(bemlinter());
