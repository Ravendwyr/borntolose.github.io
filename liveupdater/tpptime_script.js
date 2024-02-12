// the text area that the buttons will insert text into
textarea = document.querySelector(".usertext-edit textarea")

// create button bar
const btnbox = document.createElement("div");
btnbox.classList.add('btnbox')

// create buttons, and insert each button into the button bar
/*$(`<a class="quickinserts">Time</a> `).appendTo(btnbox).click(() => {
  textarea.value += timeElapsed()
});*/

$(` <input type="button" value="[Info]">&nbsp;&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "[Info] "
});
$(` <input type="button" value="[Recap]">&nbsp;&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "[Recap] "
});
$(` <input type="button" value="[Chat]">&nbsp;&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "[Chat] "
});
$(` <input type="button" value="[Streamer]">&nbsp;&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "[Streamer] "
});
$(` <input type="button" value="[Dev]">&nbsp;&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "[Dev] "
});
$(` <input type="button" value="[Fluff]">&nbsp;&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "[Fluff] "
});
$(` <input type="button" value="[Snark]">&nbsp;&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "[Snark] "
});
$(` <input type="button" value="[Meta]">&nbsp;&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "[Meta] "
});
$(` <br/> `).appendTo(btnbox);

$(` <input type="button" value="Catch">&nbsp;&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "**Caught a female Lv. 100 Wurmple!** Nickname: `NICKNAME`. "
});
$(` <input type="button" value="Lvl up">&nbsp;&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "**Wurmple grew to Lv. 100! **"
});
$(` <input type="button" value="Lvl up + Move">&nbsp;&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "**Wurmple grew to Lv. 100 and learned Tackle over Splash. **"
});
$(` <input type="button" value="Evo">&nbsp;&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "**Wurmple evolved into Cascoon! **"
});
$(` <input type="button" value="Vs.">&nbsp;&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "**Vs. Trainer Red!** (Attempt #1) "
});
$(` <input type="button" value="Badge">&nbsp;&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "**Defeated Leader Misty and received the Cascade Badge! **"
});
$(` <input type="button" value="TM">&nbsp;&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "**Received TM90 Snarl! **"
});
$(` <input type="button" value="Mart">&nbsp;&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "**Bought/Sold 10 Potions! **"
});
$(` <br/> `).appendTo(btnbox);

$(` <input type="button" value="Poké">&nbsp;&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "Poké"
});
$(` <input type="button" value="₽">&nbsp;&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "₽"
});
$(` <input type="button" value="♂">&nbsp;&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "♂"
});
$(` <input type="button" value="♀">&nbsp;&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "♀"
});
$(` <input type="button" value="ᴾᴋ">&nbsp;&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "ᴾᴋ"
});
$(` <input type="button" value="ᴹɴ">&nbsp;&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "ᴹɴ"
});
$(` <input type="button" value="×">&nbsp;&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value += "×"
});
$(` <a class="quickinserts">Quick substitute</a>&nbsp;&nbsp;`).appendTo(btnbox).click(() => {
  textarea.value.replace("$$", "₽").replace("Pokemon", "Pokémon").replace("Pokecenter", "Poké Center").replace("Pokemart", "Poké Mart").replace("pokecenter", "Poké Center").replace("pokemart", "Poké Mart").replace("pokeball", "Poké Ball").replace("Pokeball", "Poké Ball").replace("(male)", "♂").replace("(female)", "♀").replace("(pk)", "ᴾᴋ").replace("(mn)", "ᴹɴ").replace("(x)", "×").replace("NidoranM", "Nidoran♂").replace("NidoranF", "Nidoran♀");
});
$(` <br/> `).appendTo(btnbox);
$(` <br/> `).appendTo(btnbox);

// insert button bar into page
textarea.parentElement.insertBefore(btnbox, textarea);