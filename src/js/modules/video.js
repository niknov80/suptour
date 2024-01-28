export const initVideo = () => {
  let videos = document.querySelectorAll('div[data-video]');

  for (let i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
};

const setupVideo = (video) => {
  let link = video.querySelector('a');
  let button = video.querySelector('button');
  let mediaUrl = link.href;
  let wrap = video.querySelector('.promo-video__wrapper');

  button.addEventListener('click', () => {
    let iframe = createIframe(mediaUrl);
    wrap.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
};

const createIframe = (url) => {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(url));

  return iframe;
};

const generateURL = (url) => {
  let query = '?rel=0&showinfo=0&autoplay=1';

  return url + query;
};
