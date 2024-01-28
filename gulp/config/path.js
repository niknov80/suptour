// Получаем имя из папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './build'; // Путь к папке с результатом, можно поменять на rootFolder
const srcFolder = './src'; //  0 Путь к исходным файлам

export const path = {
  build: {
    html: `${buildFolder}/`,
    htmlValidate: `${buildFolder}/*.html`,
    css: `${buildFolder}/css/`,
    img: `${buildFolder}/img/`,
    sprite: `${buildFolder}/img/`,
    svg: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
    js: `${buildFolder}/js/`,
    favicon: `${buildFolder}/`,
  },
  src: {
    sass: `${srcFolder}/sass/style.scss`,
    pug: `${srcFolder}/pug/pages/*.pug`,
    img: `${srcFolder}/img/**/*.{png,jpg,jpeg}`,
    sprite: `${srcFolder}/img/sprite/**/*.svg`,
    svg: `${srcFolder}/img/svg/**/*.svg`,
    fonts: `${srcFolder}/fonts/`,
    ttf: `${srcFolder}/fonts/*.ttf`,
    woff: `${srcFolder}/fonts/*.{woff,woff2}`,
    js: `${srcFolder}/js/main.js`,
    vendor: `${srcFolder}/js/vendor.js`,
    favicon: `${srcFolder}/favicon.ico`,
  },
  watch: {
    sass: `${srcFolder}/sass/**/*.scss`,
    pug: `${srcFolder}/pug/**/*.pug`,
    img: `${srcFolder}/img/**/*.{png,jpg,jpeg}`,
    sprite: `${srcFolder}/img/sprite/**/*.svg`,
    svg: `${srcFolder}/img/svg/**/*.svg`,
    js: `${srcFolder}/js/**/*.js`,
  },
  clean: buildFolder, // папка для очистки
  buildFolder, // папка для продакшена
  srcFolder, // папка с исходниками
  rootFolder // корневая папка проекта
};
