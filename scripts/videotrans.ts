const nav = document.querySelector(`.siteNav`) as HTMLElement;

let videoWrapperHeight = document
  .querySelector(`.video`)
  .getBoundingClientRect().height;
const navBounding = nav.getBoundingClientRect();

function scrollCallbackHandler() {
  let ratioVisible =
    1 -
    (videoWrapperHeight - document.documentElement.scrollTop) /
      videoWrapperHeight;
  const heroWrapper = document.querySelector(`.heroWrapper`) as HTMLElement;
  if (ratioVisible > 0) {
    heroWrapper.classList.add(`heroWrapper-disabled`);
  } else {
    heroWrapper.classList.remove(`heroWrapper-disabled`);
  }
}

window.addEventListener(`scroll`, scrollCallbackHandler);
