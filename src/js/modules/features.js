const TABLET_WIDTH = 960;
const MOBILE_WIDTH = 768;

const featureListElement = document.querySelector('.features__list');
window.addEventListener('resize', () => {
  calcFeatureRows();
});
const getFeatureColumns = () => {
  let featureColumn = 3;

  if (window.innerWidth >= MOBILE_WIDTH && window.innerWidth < TABLET_WIDTH) {
    featureColumn = 2;
  }

  if (window.innerWidth < MOBILE_WIDTH) {
    featureColumn = 1;
  }

  return featureColumn;
};
const getFeatureRows = () => {
  let featureElementCount = featureListElement.children;
  return Math.ceil(featureElementCount.length / 2 / getFeatureColumns()) * 2;
};

const calcFeatureRows = () => {
  if (featureListElement) {
    featureListElement.style.setProperty('--rows-count', getFeatureRows());
    featureListElement.style.setProperty('--columns-count', getFeatureColumns());
  }
};

export {calcFeatureRows};
