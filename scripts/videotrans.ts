const nav = document.querySelector(`.siteNav`) as HTMLElement;
const swipeOver = document.querySelector(`.swipeOver`) as HTMLElement;

let videoWrapperHeight = document
  .querySelector(`.video`)
  .getBoundingClientRect().height;
const navBounding = nav.getBoundingClientRect();

function scrollCallbackHandler() {
  if (swipeOver.classList.contains(`swipeOver-isOpen`)) {
    return;
  } else {
    let ratioVisible =
      1 -
      (videoWrapperHeight - document.documentElement.scrollTop) /
        videoWrapperHeight;
    const heroWrapper = document.querySelector(`.heroWrapper`) as HTMLElement;
    ratioVisible > 0
      ? heroWrapper.classList.add(`heroWrapper-disabled`)
      : heroWrapper.classList.remove(`heroWrapper-disabled`);
  }
}

window.addEventListener(`scroll`, scrollCallbackHandler);
