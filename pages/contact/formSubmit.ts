const sendButton = document.querySelector(`.sendButton`) as HTMLElement;
const contactForm = document.querySelector(`form`) as HTMLFormElement;
const formModal = document.querySelector(`formModal`) as HTMLElement;

const handleSubmit = () => {
  console.log(`works!`);
};

const handleCloseButton = (e) => {
  if (!e.target.matches(`.formModal-close`)) return;

  formModal.classList.remove(`formModal-open`);
};

document.addEventListener(`click`, (e) => {
  handleCloseButton(e);
});

contactForm.addEventListener(`submit`, handleSubmit);
