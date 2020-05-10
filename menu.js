const siteNav-hamburger = document.querySelector(`.siteNav-hamburger`);
const swipeOver = document.querySelector(`.swipeOver`);
const closeButton = document.querySelector(`.close`);

const toggleswipeOver = () => {
  if (siteNav-hamburger && swipeOver && closeButton) {
    swipeOver.classList.toggle(`swipeOver-isOpen`);
  }
  document.querySelector(`body`).classList.toggle(`disable-scroll`);
};

siteNav-hamburger.addEventListener(`click`, toggleswipeOver);
closeButton.addEventListener(`click`, toggleswipeOver);
