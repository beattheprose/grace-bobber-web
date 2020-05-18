const video = document.querySelector(`.video`) as any;
const nav = document.querySelector(`.siteNav`) as HTMLElement;
const link = document.querySelectorAll(`.menuList-link`) as any;
const titleName = document.querySelector(
  `.siteNav-siteTitle>h3`
) as HTMLElement;

const videoBounding = video.getBoundingClientRect();
const navBounding = nav.getBoundingClientRect();

const cleanVidHeight = videoBounding.height - navBounding.height;

const scrollCallbackHandler = () => {
  let alpha =
    1 - (cleanVidHeight - document.documentElement.scrollTop) / cleanVidHeight;
  nav.style.backgroundColor = `rgba(255,255,255,${alpha})`;
  titleName.style.color = `rgba(0,0,0,${alpha})`;
  link.forEach((link) => {
    link.style.color = `rgba(0,0,0,${alpha})`;
  });

  console.log(alpha);
  const heroWrapper = document.querySelector(`.heroWrapper`) as HTMLElement;
  if (alpha > 0) {
    heroWrapper.classList.add(`heroWrapper-disabled`);
  } else {
    heroWrapper.classList.remove(`heroWrapper-disabled`);
  }
};

// Set video element to variable
let videoStartTime = 0;

video.addEventListener(
  "loadedmetadata",
  function() {
    videoStartTime = 200;
    this.currentTime = videoStartTime;
  },
  false
);

window.addEventListener(`scroll`, scrollCallbackHandler);
