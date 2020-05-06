const hamburger = document.querySelector(`.hamburger`);
const menu = document.querySelector(`.menu`);
const closeButton = document.querySelector(`.close`);

const toggleMenu = () => menu.classList.toggle(`open`);

hamburger.addEventListener(`click`, toggleMenu);
closeButton.addEventListener(`click`, toggleMenu);
