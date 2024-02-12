// the text area that the buttons will insert text into
textarea = document.querySelector(".usertext-edit textarea")

// create button bar
const btnbox = document.createElement("div");
btnbox.classList.add('btnbox')

// create buttons, and insert each button into the button bar
/*$(`<a class="quickinserts">Time</a> `).appendTo(btnbox).click(() => {
  textarea.value += timeElapsed()
});*/

$(` <input type="button" value="[Info]">&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "[Info] "
});
$(` <input type="button" value="[Recap]">&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "[Recap] "
});
$(` <input type="button" value="[Chat]">&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "[Chat] "
});
$(` <input type="button" value="[Streamer]">&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "[Streamer] "
});
$(` <input type="button" value="[Dev]">&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "[Dev] "
});
$(` <input type="button" value="[Fluff]">&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "[Fluff] "
});
$(` <input type="button" value="[Snark]">&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "[Snark] "
});
$(` <input type="button" value="[Meta]">&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "[Meta] "
});
$(` <br/> `).appendTo(btnbox);

$(` <input type="button" value="Catch">&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "**Caught a male Lv. 100 Wurmple!** Nickname: `NICKNAME`."
});
$(` <input type="button" value="Lvl up">&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "**Wurmple grew to Lv 100.**"
});
$(` <input type="button" value="Lvl up + Move">&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "**Wurmple grew to Lv 100 and learned Tackle over Tackle.**"
});
$(` <input type="button" value="Vs.">&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "**Vs. Trainer Red!** (Attempt #1) "
});
$(` <input type="button" value="Badge">&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "**Defeated Leader Misty and received the Cascade Badge!**"
});
$(` <br/> `).appendTo(btnbox);

$(` <input type="button" value="Poké">&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "Poké"
});
$(` <input type="button" value="₽">&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "₽"
});
$(` <input type="button" value="♂">&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "♂"
});
$(` <input type="button" value="♀">&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "♀"
});
$(` <input type="button" value="ᴾᴋ">&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "ᴾᴋ"
});
$(` <input type="button" value="ᴹɴ">&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "ᴹɴ"
});
$(` <br/> `).appendTo(btnbox);
$(` <br/> `).appendTo(btnbox);

// insert button bar into page
textarea.parentElement.insertBefore(btnbox, textarea);