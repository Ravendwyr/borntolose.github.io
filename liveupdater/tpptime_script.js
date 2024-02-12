// the text area that the buttons will insert text into
textarea = document.querySelector(".usertext-edit textarea")

// create button bar
const btnbox = document.createElement("div");
btnbox.classList.add('btnbox')

// create buttons, and insert each button into the button bar
/*$(`<a class="quickinserts">Time</a> `).appendTo(btnbox).click(() => {
  textarea.value += timeElapsed()
});*/
$(`<input type="button">Poké</input> `).appendTo(btnbox).click(() => {
  textarea.value += "Poké"
});
$(`<input type="button">₽</input> `).appendTo(btnbox).click(() => {
  textarea.value += "₽"
});

// insert button bar into page
textarea.parentElement.insertBefore(btnbox, textarea);