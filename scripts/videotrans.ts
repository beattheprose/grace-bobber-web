const video = document.querySelector(`.video`) as any;
const nav = document.querySelector(`.siteNav`) as HTMLElement;
// const link = document.querySelectorAll(`.menuList-link`) as any;
// const titleName = document.querySelector(
//   `.siteNav-siteTitle>h3`
// ) as HTMLElement;

const videoBounding = video.getBoundingClientRect();
const navBounding = nav.getBoundingClientRect();

const cleanVidHeight = videoBounding.height - navBounding.height;

function scrollCallbackHandler() {
  let alpha =
    1 - (cleanVidHeight - document.documentElement.scrollTop) / cleanVidHeight;
  const heroWrapper = document.querySelector(`.heroWrapper`) as HTMLElement;
  if (alpha > 0) {
    heroWrapper.classList.add(`heroWrapper-disabled`);
  } else {
    heroWrapper.classList.remove(`heroWrapper-disabled`);
  }
}

window.addEventListener(`scroll`, scrollCallbackHandler);

// modified headroom script
import Headroom from "headroom.js";
const indexNav = document.querySelector(`nav`) as HTMLElement;
const videoHeight = videoBounding.height;
var options = {
  offset: videoHeight,
};
var headroom = new Headroom(indexNav, options);
headroom.init();
