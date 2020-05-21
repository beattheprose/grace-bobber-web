const imageList = document.querySelectorAll(`.gallery-image`);
const bigImage = document.querySelector(`.big-image`) as HTMLImageElement;

const handleClick = (e) => {
  bigImage.src = e.currentTarget.src;
  e.currentTarget.classList.add(`selected`);
  console.log(e.currentTarget, imageList);
  imageList.forEach((image) => {
    image !== e.currentTarget ? image.classList.remove(`selected`) : null;
  });
};

imageList.forEach((image: HTMLImageElement) =>
  image.addEventListener(`click`, handleClick)
);
