const video = document.querySelector(`.video`) as HTMLElement;
const nav = document.querySelector(`.siteNav`) as HTMLElement;
const link = document.querySelector(`.menuList-link`) as HTMLElement;

const videoBounding = video.getBoundingClientRect();
const navBounding = nav.getBoundingClientRect();

const cleanVidHeight = videoBounding.height - navBounding.height;

const scrollCallbackHandler = () => {
  let alpha =
    1 - (cleanVidHeight - document.documentElement.scrollTop) / cleanVidHeight;
  nav.style.backgroundColor = `rgba(255,255,255,${alpha})`;
  link.style.color = `rgba(255,255,255,${alpha})`;
};

window.addEventListener(`scroll`, scrollCallbackHandler);
