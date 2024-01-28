export const server = () => {
  app.plugins.browsersync.init({
    server: {
      baseDir: app.path.build
    },
    notify: false,
    injectChanges: false,
    port: 3000,
  });
};
