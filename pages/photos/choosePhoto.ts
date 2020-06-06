const modal = document.querySelector(`.modal`) as HTMLElement;
const modalImage = modal.querySelector(`.modal-image`) as HTMLImageElement;
const modalCaption = modal.querySelector(`.caption`) as HTMLElement;
const previousArrow = modal.querySelector(
  `.modal-arrow-previous`
) as HTMLElement;
const nextArrow = modal.querySelector(`.modal-arrow-next`) as HTMLElement;
let currentImage: HTMLImageElement;

const openModal = () => modal.classList.add(`modal-open`);
const closeModal = () => modal.classList.remove(`modal-open`);
const showImage = (imageEl) => {
  modalImage.src = imageEl.src;
  modalImage.alt = imageEl.alt;
  modalCaption.innerText = imageEl.alt;
  openModal();

  currentImage = imageEl;
  if (!currentImage.previousElementSibling) {
    previousArrow.style.opacity = `0`;
  } else if (!currentImage.nextElementSibling) {
    nextArrow.style.opacity = `0`;
  } else {
    previousArrow.style.opacity = `1`;
    nextArrow.style.opacity = `1`;
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

// TODO: hide the first and last arrows using the hidden attribute
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
    if (e.target === modal) closeModal();
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

document.addEventListener(`click`, (e) => {
  handlePhotoClick(e);
  handleArrowClick(e);
  handleCloseClick(e);
  handleClickOutside(e);
});

document.addEventListener(`keyup`, (e) => handleKeys(e));
