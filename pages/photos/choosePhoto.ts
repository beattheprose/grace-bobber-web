const modal = document.querySelector(`.modal`) as HTMLElement;
const modalImage = modal.querySelector(`.modal-image`) as HTMLImageElement;
const modalCaption = modal.querySelector(`.caption`) as HTMLElement;
let currentImage;

const openModal = () => modal.classList.add(`modal-open`);
const closeModal = () => modal.classList.remove(`modal-open`);
const showImage = (imageEl) => {
  modalImage.src = imageEl.src;
  modalImage.alt = imageEl.alt;
  modalCaption.innerText = imageEl.alt;
  currentImage = imageEl;
  openModal();
};
const showNextImage = () => showImage(currentImage.nextElementSibling);
const showPreviousImage = () => showImage(currentImage.previousElementSibling);

// TODO: hide the first and last arrows using the hidden attribute
const handlePhotoClick = (e) =>
  e.target.matches(`.gallery-image`) ? showImage(e.target) : null;
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
    e.target === modal ? closeModal() : null;
  }
};

document.addEventListener(`click`, (e) => {
  handlePhotoClick(e);
  handleArrowClick(e);
  handleCloseClick(e);
  handleClickOutside(e);
});
