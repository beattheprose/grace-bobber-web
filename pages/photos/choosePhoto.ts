const modal = document.querySelector(`.modal`) as HTMLElement;
const modalImage = modal.querySelector(`.modal-image`) as HTMLImageElement;
const modalCaption = modal.querySelector(`.caption`) as HTMLElement;
const previousArrow = modal.querySelector(
  `.modal-arrow-previous`
) as HTMLElement;
const nextArrow = modal.querySelector(`.modal-arrow-next`) as HTMLElement;
let currentImage: HTMLImageElement;
let touchstartX: number = 0;
let touchendX: number = 0;

const openModal = () => modal.classList.add(`modal-open`);
const closeModal = () => modal.classList.remove(`modal-open`);
const showImage = (imageEl) => {
  modalImage.src = imageEl.dataset.src;
  modalImage.alt = imageEl.alt;
  modalCaption.innerText = imageEl.alt;
  openModal();

  currentImage = imageEl;
  if (!currentImage.previousElementSibling) {
    previousArrow.classList.add(`modal-arrow-hidden`);
  } else if (!currentImage.nextElementSibling) {
    nextArrow.classList.add(`modal-arrow-hidden`);
  } else {
    previousArrow.classList.remove(`modal-arrow-hidden`);
    nextArrow.classList.remove(`modal-arrow-hidden`);
  }
};
const showNextImage = () => {
  if (currentImage.nextElementSibling)
    showImage(currentImage.nextElementSibling);
};
const showPreviousImage = () => {
  if (currentImage.previousElementSibling)
    showImage(currentImage.previousElementSibling);
};

const handlePhotoClick = ({ target }) => {
  if (target.matches(`.gallery-image`)) showImage(target);
};
const handleArrowClick = (e) => {
  const isPrev: boolean =
    e.target.matches(`.modal-arrow-previous`) ||
    e.target.matches(`.modal-arrow-previous polyline`);
  const isNext: boolean =
    e.target.matches(`.modal-arrow-next`) ||
    e.target.matches(`.modal-arrow-next polyline`);

  isPrev ? showPreviousImage() : null;
  isNext ? showNextImage() : null;
};
const handleCloseClick = (e) => {
  if (!e.target.matches(`.closeButton`)) return;
  closeModal();
};
const handleClickOutside = (e) => {
  if (modal.classList.contains(`modal-open`)) {
    if (
      e.target === modal ||
      e.target === document.querySelector(`.modal-content`)
    )
      closeModal();
  }
};

const handleKeys = ({ key }) => {
  if (modal.classList.contains(`modal-open`))
    switch (key) {
      default:
        break;
      case `Escape`:
        closeModal();
        break;
      case `ArrowLeft`:
        showPreviousImage();
        break;
      case `ArrowRight`:
        showNextImage();
        break;
    }
};

const handleSwipes = () => {
  if (touchendX < touchstartX) {
    showNextImage();
  }
  if (touchendX > touchstartX) {
    showPreviousImage();
  }
};

document.addEventListener(`click`, (e) => {
  handlePhotoClick(e);
  handleArrowClick(e);
  handleCloseClick(e);
  handleClickOutside(e);
});
document.addEventListener(`keyup`, (e) => handleKeys(e));
document.addEventListener(
  "touchstart",
  (e: TouchEvent) => {
    if (modal.classList.contains(`modal-open`))
      touchstartX = e.changedTouches[0].screenX;
  },
  false
);
document.addEventListener(
  "touchend",
  (e: TouchEvent) => {
    if (modal.classList.contains(`modal-open`)) {
      touchendX = e.changedTouches[0].screenX;
      handleSwipes();
    }
  },
  false
);
