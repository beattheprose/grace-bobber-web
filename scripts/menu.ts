//sticky, but not annoying nav
import Headroom from "headroom.js";
const siteNav = document.querySelector(`nav`) as HTMLElement;
var headroom = new Headroom(siteNav);
headroom.init();

const siteNavHamburger = document.querySelector(
  `.siteNav-hamburger`
) as HTMLElement;
const swipeOver = document.querySelector(`.swipeOver`) as HTMLElement;
const closeButton = document.querySelector(`.close`) as HTMLElement;

const swipeOverDropDown = swipeOver.querySelectorAll(`.menuList-dropdown`);

const handleSwipeClick = (e) => {
  e.preventDefault();
  swipeOverDropDown.forEach((element) =>
    element.classList.remove(`menuList-dropdown-isOpen`)
  );
  e.currentTarget.nextElementSibling.classList.add(`menuList-dropdown-isOpen`);
};

swipeOverDropDown.forEach((dropDown: HTMLElement) => {
  dropDown.previousElementSibling.addEventListener(`click`, handleSwipeClick);
});

const swipeOverToggle = () => {
  if (siteNavHamburger && swipeOver && closeButton) {
    swipeOver.classList.toggle(`swipeOver-isOpen`);
  }
  document.querySelector(`body`).classList.toggle(`disable-scroll`);
};

siteNavHamburger.addEventListener(`click`, swipeOverToggle);
closeButton.addEventListener(`click`, swipeOverToggle);

// Dynamically generate the list of links based on the content
// const menuItems = document.querySelectorAll(`.menuList-link`);
// const swipeOverLinkList = document.querySelector(`.swipeOver-linkList`);

// menuItems.forEach((item: { outerHTML: string }) => {
//   const li: string = `<li class="swipeOver-link">${item.outerHTML}</li>`;
//   swipeOverLinkList.insertAdjacentHTML(`beforeend`, li);
// });

// Dynamically Generate the second swipeover
