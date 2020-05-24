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

// handle the mute button sound
const muteButton = document.querySelector(`.mutebutton`) as HTMLElement;
const video = document.querySelector(`.video`) as any;

const handleClick = (e) => {
  video.muted ? (video.muted = false) : (video.muted = true);
  muteButton.style.removeProperty(`animation`);
};

muteButton.addEventListener(`click`, handleClick);
