const hamburger = document.querySelector(`.hamburger`);
const menu = document.querySelector(`.menu`);
const closeButton = document.querySelector(`.close`);

const toggleMenu = () => {
  menu.classList.toggle(`open`);
  document.querySelector(`body`).classList.toggle(`disable-scroll`);
};

hamburger.addEventListener(`click`, toggleMenu);
closeButton.addEventListener(`click`, toggleMenu);

const scrollToAccept = () => {
  const button = document.querySelector(`.accept`);

  if (!menu) {
    return; // quit if there isn't the terms item on the page
  }

  const obCallback = payload => {
    if (payload[0].intersectionRatio === 1) {
      button.disabled = false;
      ob.unobserve(terms.lastElementChild);
    }
  };
  const ob = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 1,
  });

  ob.observe(terms.lastElementChild);
};

scrollToAccept();
