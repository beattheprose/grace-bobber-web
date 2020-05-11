const siteNavHamburger = document.querySelector(`.siteNav-hamburger`);
const swipeOver = document.querySelector(`.swipeOver`);
const closeButton = document.querySelector(`.close`);

const swipeOverToggle = () => {
  if (siteNavHamburger && swipeOver && closeButton) {
    swipeOver.classList.toggle(`swipeOver-isOpen`);
  }
  document.querySelector(`body`).classList.toggle(`disable-scroll`);
};

siteNavHamburger.addEventListener(`click`, swipeOverToggle);
closeButton.addEventListener(`click`, swipeOverToggle);

// Dynamically generate the list of links based on the content
const menuItems = document.querySelectorAll(`.menuList-link`);
const swipeOverLinkList = document.querySelector(`.swipeOver-linkList`);

interface HTML {
  innerHTML: string;
  outerHTML: string;
}
menuItems.forEach((item: HTML) => {
  const li: string = `<li class="swipeOver-link">${item.outerHTML}</li>`;
  swipeOverLinkList.insertAdjacentHTML(`beforeend`, li);
});

const array = [`apples`, `oranges`, `bananas`];
