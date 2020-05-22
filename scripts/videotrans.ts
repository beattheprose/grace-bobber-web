const video = document.querySelector(`.video`) as any;
const nav = document.querySelector(`.siteNav`) as HTMLElement;

let videoBounding = video.getBoundingClientRect();
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

console.log(videoBounding.height);

// modified headroom script
import Headroom from "headroom.js";
const indexNav = document.querySelector(`nav`) as HTMLElement;
var options = {
  offset: video.clientHeight,
};
var headroom = new Headroom(indexNav, options);
headroom.init();
