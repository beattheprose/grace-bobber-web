const galleryList = document.querySelectorAll(`.gallery-image`);
const bigImage = document.querySelector(`.big-image`) as HTMLImageElement;
const modal = document.querySelector(`.modal`) as HTMLElement;
const xButton = modal.querySelector(`.closeButton`) as HTMLElement;
const modalImage = modal.querySelector(`.modal-content`) as HTMLImageElement;
const modalCaption = modal.querySelector(`.caption`) as HTMLElement;

const handleImageClick = (e) => {
  console.log(e.currentTarget.src);
  const slug = e.currentTarget.src.split(`.`)[0];
  const extension = e.currentTarget.src.split(`.`)[1];

  modal.style.display = `flex`;
  modalImage.src = `${slug}-original.${extension}`;
  modalImage.alt = e.currentTarget.alt;
  modalCaption.innerText = e.currentTarget.alt;
};

galleryList.forEach((image: HTMLImageElement) =>
  image.addEventListener(`click`, handleImageClick)
);

xButton.addEventListener(`click`, () => (modal.style.display = `none`));
