const video = document.querySelector(`.video`) as HTMLElement;
const nav = document.querySelector(`.siteNav`) as HTMLElement;
const link = document.querySelector(`.menuList-link`) as HTMLElement;
const content = document.querySelector(`.content`) as HTMLElement;

const bounding = video.getBoundingClientRect();
const bounding2 = content.getBoundingClientRect();

console.log(bounding2);

const scrollCallbackHandler = () => {
  let alpha =
    1 -
    (bounding.height - document.documentElement.scrollTop) / bounding.height;
  nav.style.backgroundColor = `rgba(255,255,255,${alpha})`;
  link.style.color = `rgba(255,255,255,${alpha})`;
};

window.addEventListener(`scroll`, scrollCallbackHandler);
