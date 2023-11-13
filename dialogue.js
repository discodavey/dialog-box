const dialog = document.querySelector('dialog');
const button = document.querySelector('.open-button');
const closeButton = document.querySelector('.close-button');

button.addEventListener("click", () => {
  dialog.showModal();
  // dialog.show() Can use this as well;
})

closeButton.addEventListener("click", () => {
  dialog.close();
  // dialog.hide() Can use this as well;
})