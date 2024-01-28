import sourcemaps from 'gulp-sourcemaps';
import concat from 'gulp-concat';
import browserify from 'browserify';
import uglify from 'gulp-uglify';
import vinylBuffer from 'vinyl-buffer';
import vinylSourceStream from 'vinyl-source-stream';

export const compileMainMinScripts = () => browserify(app.path.src.js, {debug: true})
  .transform('babelify', {presets: ['@babel/preset-env']})
  .bundle()
  .pipe(vinylSourceStream('main.js'))
  .pipe(vinylBuffer())
  .pipe(uglify())
  .pipe(concat('main.min.js'))
  .pipe(app.gulp.dest(app.path.build.js));

export const compileMainScripts = () => browserify(app.path.src.js, {debug: true})
  .transform('babelify', {presets: ['@babel/preset-env']})
  .bundle()
  .pipe(vinylSourceStream('main.js'))
  .pipe(vinylBuffer())
  .pipe(sourcemaps.init({loadMaps: true}))
  .pipe(concat('main.min.js'))
  .pipe(sourcemaps.write('.'))
  .pipe(app.gulp.dest(app.path.build.js));

export const compileVendorScripts = () => browserify(app.path.src.vendor)
  .transform('babelify', {presets: ['@babel/preset-env']})
  .bundle()
  .pipe(vinylSourceStream('vendor.js'))
  .pipe(vinylBuffer())
  .pipe(uglify())
  .pipe(concat('vendor.min.js'))
  .pipe(app.gulp.dest(app.path.build.js));
