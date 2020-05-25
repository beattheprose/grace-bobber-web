const galleryList = document.querySelectorAll(`.gallery-image`);
const bigImage = document.querySelector(`.big-image`) as HTMLImageElement;
const modal = document.querySelector(`.modal`) as HTMLElement;
const xButton = modal.querySelector(`.closeButton`) as HTMLElement;
const modalImage = modal.querySelector(`.modal-content`) as HTMLImageElement;
const modalCaption = modal.querySelector(`.caption`) as HTMLElement;

const handleImageClick = (e) => {
  const origURL = e.currentTarget.src.split(`dist/`).join(``);
  modal.style.display = `flex`;
  modalImage.src = origURL;
  modalImage.alt = e.currentTarget.alt;
  modalCaption.innerText = e.currentTarget.alt;
};

galleryList.forEach((image: HTMLImageElement) =>
  image.addEventListener(`click`, handleImageClick)
);

xButton.addEventListener(`click`, () => (modal.style.display = `none`));
