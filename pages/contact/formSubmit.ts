const sendButton = document.querySelector(`.sendButton`) as HTMLElement;
const contactForm = document.querySelector(`form`) as HTMLFormElement;

const handleSubmit = () => {
  contactForm.preventDefault;
  console.log(`works!`);
};

const handleCloseButton = (e) => {
  if (!e.target.matches(`.formModal-close`)) return;

  console.log(`clicked!`);
};

document.addEventListener(`click`, (e) => {
  handleCloseButton(e);
});

contactForm.addEventListener(`submit`, handleSubmit);
