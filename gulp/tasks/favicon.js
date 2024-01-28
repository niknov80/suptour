export const favicon = () => app.gulp.src(app.path.src.favicon)
  .pipe(app.plugins.plumber(
    app.plugins.notify.onError({
      title: 'FAVICON',
      message: 'Error: <%= error.message %>'
    })
  ))
  .pipe(app.gulp.dest(app.path.build.favicon))
