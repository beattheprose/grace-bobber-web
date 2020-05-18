const video = document.querySelector(`.video`) as HTMLElement;
const nav = document.querySelector(`.siteNav`) as HTMLElement;
const link = document.querySelectorAll(`.menuList-link`) as any;
const titleName = document.querySelector(
  `.siteNav-siteTitle>h3`
) as HTMLElement;

const videoBounding = video.getBoundingClientRect();
const navBounding = nav.getBoundingClientRect();

const cleanVidHeight = videoBounding.height - navBounding.height;

const scrollCallbackHandler = () => {
  let alpha =
    1 - (cleanVidHeight - document.documentElement.scrollTop) / cleanVidHeight;
  nav.style.backgroundColor = `rgba(255,255,255,${alpha})`;
  titleName.style.color = `rgba(${256 - 256 * alpha},${256 -
    256 * alpha},${256 - 256 * alpha},1)`;
  link.forEach((link) => {
    link.style.color = `rgba(0,0,0,${alpha})`;
  });

  console.log(alpha);
  const heroWrapper = document.querySelector(`.heroTitle`) as HTMLElement;
  if (alpha > 0) {
    heroWrapper.classList.add(`heroTitle-disabled`);
  } else {
    heroWrapper.classList.remove(`heroTitle-disabled`);
  }
};

window.addEventListener(`scroll`, scrollCallbackHandler);
window.addEventListener(`click`, () => {});
