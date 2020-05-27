const modal = document.querySelector(`.modal`) as HTMLElement;
const modalImage = modal.querySelector(`.modal-content`) as HTMLImageElement;
const modalCaption = modal.querySelector(`.caption`) as HTMLElement;

const handlePhotoSelect = (e) => {
  if (!e.target.matches(`img`)) return;

  modal.style.display = `flex`;
  modalImage.src = e.target.src;
  modalImage.alt = e.target.alt;
  modalCaption.innerText = e.target.alt;
};

const handleCloseButton = (e) => {
  if (!e.target.matches(`.closeButton`)) return;

  modal.style.display = `none`;
};

document.addEventListener(`click`, (e) => {
  handlePhotoSelect(e);
  handleCloseButton(e);
});
