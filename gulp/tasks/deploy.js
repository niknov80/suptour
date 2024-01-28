import ghPages from 'gh-pages'

export const deployToGithub = (cb) => {
  ghPages.publish(app.path.buildFolder, cb);
}
