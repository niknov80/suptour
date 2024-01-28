import { htmlValidator } from "gulp-w3c-html-validator";

export const validateMarkup = () => app.gulp.src(app.path.build.htmlValidate)
  .pipe(htmlValidator.analyzer())
  .pipe(htmlValidator.reporter({ throwErrors: true }));
