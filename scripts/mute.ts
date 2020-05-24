const muteButton = document.querySelector(`.mutebutton`) as HTMLElement;
const video = document.querySelector(`.video`) as any;

const handleClick = (e) => {
  video.muted ? (video.muted = false) : (video.muted = true);
};

muteButton.addEventListener(`click`, handleClick);
