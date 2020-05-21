const galleryList = document.querySelectorAll(`.gallery-image`);
const bigImage = document.querySelector(`.big-image`) as HTMLImageElement;
const modal = document.querySelector(`.modal`) as HTMLElement;
const xButton = modal.querySelector(`.closeButton`) as HTMLElement;
const modalImage = modal.querySelector(`.modal-content`) as HTMLImageElement;
const modalCaption = modal.querySelector(`.caption`) as HTMLElement;

const handleImageClick = (e) => {
  modal.style.display = `block`;
  modalImage.src = e.currentTarget.src;
  modalImage.alt = e.currentTarget.alt;
  modalCaption.innerText = e.currentTarget.alt;
};

galleryList.forEach((image: HTMLImageElement) =>
  image.addEventListener(`click`, handleImageClick)
);

xButton.addEventListener(`click`, (e) => (modal.style.display = `none`));
