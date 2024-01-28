// Основные модули
import gulp from 'gulp';

// Импорт путей
import { path } from './gulp/config/path.js';

// Импорт плагинов
import { plugins } from './gulp/config/plugins.js';

// Передаем значения в глобальную переменную
global.app = {
  path,
  gulp,
  plugins
};

// Импорт задач
import { clean } from './gulp/tasks/clean.js';
import { server } from './gulp/tasks/server.js';
import { styles} from "./gulp/tasks/styles.js";
import { pug } from "./gulp/tasks/pug.js";
import { images, copyImage, cleanImage } from './gulp/tasks/images.js';
import { sprite, svg } from './gulp/tasks/svg.js';
import { otfToTtf, ttfToWoff, copyWoff } from './gulp/tasks/fonts.js';
import { compileMainMinScripts, compileMainScripts, compileVendorScripts } from './gulp/tasks/scripts.js';
import { validateMarkup } from "./gulp/tasks/w3c.js";
import { lintBem } from "./gulp/tasks/bem.js";
import {deployToGithub} from "./gulp/tasks/deploy.js";
import { favicon } from "./gulp/tasks/favicon.js";

// Наблюдатель за изменениями в файлах
function Watcher() {
  gulp.watch(path.watch.img, gulp.series(cleanImage, copyImage)).on('change', app.plugins.browsersync.reload);
  gulp.watch(path.watch.sass, styles);
  gulp.watch(path.watch.pug, pug);
  gulp.watch(path.watch.sprite, sprite).on('change', app.plugins.browsersync.reload);
  gulp.watch(path.watch.svg, svg).on('change', app.plugins.browsersync.reload);
  gulp.watch(path.watch.js, gulp.series(compileMainScripts, compileVendorScripts)).on('change', app.plugins.browsersync.reload);
}

const fontTask = gulp.series(ttfToWoff, copyWoff);
const ttw = ttfToWoff;
const convertOtfToTtf = otfToTtf;
const validateW3C = validateMarkup;
const lintingBem = lintBem;
const optimizeImage = images;
const deploy = deployToGithub;

const dev = gulp.series(clean, fontTask, pug, copyImage, svg, sprite, styles, compileMainScripts, compileVendorScripts, gulp.parallel(Watcher, server));
const preview = gulp.series(clean, fontTask, pug, images, svg, sprite, favicon, styles, compileMainMinScripts, compileVendorScripts, gulp.parallel(Watcher, server));
const build = gulp.series(clean, fontTask, pug, images, svg, sprite, favicon, styles, compileMainMinScripts, compileVendorScripts);

export { dev, preview, build, deploy, convertOtfToTtf, validateW3C, lintingBem, optimizeImage }
