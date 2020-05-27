// sticky, but not annoying nav using headroom.js
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
const swipeOverDropDown = document.querySelectorAll(`.swipeOver-dropdown`);

// make the hamburger menu open the swipeOver
const siteNavHamburger = document.querySelector(
  `.siteNav-hamburger`
) as HTMLElement;
const siteNavHamburgerPath = document.querySelector(`.siteNav-hamburger path`);
const closeButton = document.querySelector(`.close`) as HTMLElement;
const mobileMenuButton = document.querySelector(
  `.mobileMenuButton`
) as HTMLElement;
const bioLink = document.querySelector(`.bio-link`) as HTMLElement;

const swipeOverToggle = () => {
  if (siteNavHamburger && swipeOver && closeButton) {
    swipeOver.classList.toggle(`swipeOver-isOpen`);
  }
};

const swipeOverList = document.querySelector(`.swipeOver-linkList`);

document.addEventListener(`click`, (e: any) => {
  // listen for clicks on all the menu buttons
  e.target === siteNavHamburger ||
  e.target === siteNavHamburgerPath ||
  e.target === closeButton ||
  e.target === bioLink ||
  e.target === mobileMenuButton
    ? swipeOverToggle()
    : null;

  console.log(e.target);
});

const handleSiteNavHamburger = (e) => {
  const isHamburger: boolean =
    e.target.matches(`.siteNav-hamburger`) &&
    e.target.parentElement.matches(`.siteNav-hamburger`);
  if (!isHamburger) return;
  console.log(`fuck you`);
};

const handleSwipeOverDropdown = (e) => {
  // make sure it has a nextElementSibling
  if (e.target.nextElementSibling) {
    // delegate event
    if (!e.target.nextElementSibling.matches(`.swipeOver-dropdown`)) return;
    //execute code
    e.preventDefault();
    swipeOverDropDown.forEach((element) =>
      element.classList.remove(`swipeOver-dropdown-isOpen`)
    );
    e.target.nextElementSibling.classList.add(`swipeOver-dropdown-isOpen`);
  }
};

document.addEventListener(`click`, (e) => {
  handleSiteNavHamburger(e);
  handleSwipeOverDropdown(e);
});
