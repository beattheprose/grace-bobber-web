// sticky, but not annoying nav
import Headroom from "headroom.js";
const siteNav = document.querySelector(`nav`) as HTMLElement;
const videoWrapper = document.querySelector(`.videoWrapper`) as HTMLElement;
let options;
videoWrapper
  ? (options = { offset: videoWrapper.clientHeight })
  : (options = {});
var headroom = new Headroom(siteNav, options);
headroom.init();

// activate submenus on swipeOver
const swipeOver = document.querySelector(`.swipeOver`) as HTMLElement;
const swipeOverDropDown = swipeOver.querySelectorAll(`.swipeOver-dropdown`);

const handleSwipeClick = (e) => {
  e.preventDefault();
  swipeOverDropDown.forEach((element) =>
    element.classList.remove(`swipeOver-dropdown-isOpen`)
  );
  e.currentTarget.nextElementSibling.classList.add(`swipeOver-dropdown-isOpen`);
};

swipeOverDropDown.forEach((dropDown: HTMLElement) => {
  dropDown.previousElementSibling.addEventListener(`click`, handleSwipeClick);
});

// make the hamburger menu open the swipeOver
const siteNavHamburger = document.querySelector(
  `.siteNav-hamburger`
) as HTMLElement;
const closeButton = document.querySelector(`.close`) as HTMLElement;
const mobileMenuButton = document.querySelector(
  `.mobileMenuButton`
) as HTMLElement;

const swipeOverToggle = () => {
  if (siteNavHamburger && swipeOver && closeButton) {
    swipeOver.classList.toggle(`swipeOver-isOpen`);
  }
};

siteNavHamburger.addEventListener(`click`, swipeOverToggle);
closeButton.addEventListener(`click`, swipeOverToggle);
mobileMenuButton
  ? mobileMenuButton.addEventListener(`click`, swipeOverToggle)
  : null;
