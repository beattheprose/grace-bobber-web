const siteNavHamburger = document.querySelector(`.siteNav-hamburger`);
const swipeOver = document.querySelector(`.swipeOver`);
const closeButton = document.querySelector(`.close`);

const toggleswipeOver = () => {
  if (siteNavHamburger && swipeOver && closeButton) {
    swipeOver.classList.toggle(`swipeOver-isOpen`);
  }
  document.querySelector(`body`).classList.toggle(`disable-scroll`);
};

siteNavHamburger.addEventListener(`click`, toggleswipeOver);
closeButton.addEventListener(`click`, toggleswipeOver);

// Dym=namically generate the list of links based on the content
const menuItems = document.querySelectorAll(`.menuList-link`);
const swipeOverLinkList = document.querySelector(`.swipeOver-linkList`);
menuItems.forEach(item => {
  const li = `<li class="swipeOver-link">${item.outerHTML}</li>`;
  swipeOverLinkList.insertAdjacentHTML(`beforeend`, li);
});
