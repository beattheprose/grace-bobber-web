const scrollFunc =
  window.requestAnimationFrame ||
  function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };

const nav = document.querySelector(`.nav`) as HTMLElement;
const video = document.querySelector(`.video`) as HTMLElement;

const bounding = video.getBoundingClientRect();
const percentageIn = ((bounding.height + bounding.y) / bounding.height) * 100;

console.log(bounding);

console.log(percentageIn);
