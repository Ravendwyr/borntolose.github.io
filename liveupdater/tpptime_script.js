// the text area that the buttons will insert text into
textarea = document.querySelector(".usertext-edit textarea")

// create button bar
const btnbox = document.createElement("div");
btnbox.classList.add('btnbox')

// create buttons, and insert each button into the button bar
/*$(`<a class="quickinserts">Time</a> `).appendTo(btnbox).click(() => {
  textarea.value += timeElapsed()
});*/

$(` <input type="button" value="[Info]"> `).appendTo(btnbox).click(() => {
  textarea.value += "[Info] "
});
$(` <input type="button" value="[Recap]"> `).appendTo(btnbox).click(() => {
  textarea.value += "[Recap] "
});
$(` <input type="button" value="[Chat]"> `).appendTo(btnbox).click(() => {
  textarea.value += "[Chat] "
});
$(` <input type="button" value="[Streamer]"> `).appendTo(btnbox).click(() => {
  textarea.value += "[Streamer] "
});
$(` <input type="button" value="[Dev]"> `).appendTo(btnbox).click(() => {
  textarea.value += "[Dev] "
});
$(` <input type="button" value="[Fluff]"> `).appendTo(btnbox).click(() => {
  textarea.value += "[Fluff] "
});
$(` <input type="button" value="[Snark]"> `).appendTo(btnbox).click(() => {
  textarea.value += "[Snark] "
});
$(` <input type="button" value="[Meta]"> `).appendTo(btnbox).click(() => {
  textarea.value += "[Meta] "
});
$(` <br/> `).appendTo(btnbox);

$(` <input type="button" value="Catch"> `).appendTo(btnbox).click(() => {
  textarea.value += "**Caught a female Lv. 100 Wurmple!** Nickname: `NICKNAME`. "
});
$(` <input type="button" value="Lvl up"> `).appendTo(btnbox).click(() => {
  textarea.value += "**Wurmple grew to Lv. 100! **"
});
$(` <input type="button" value="Lvl up + Move"> `).appendTo(btnbox).click(() => {
  textarea.value += "**Wurmple grew to Lv. 100 and learned Tackle over Splash. **"
});
$(` <input type="button" value="Evo"> `).appendTo(btnbox).click(() => {
  textarea.value += "**Wurmple evolved into Cascoon! **"
});
$(` <input type="button" value="Vs."> `).appendTo(btnbox).click(() => {
  textarea.value += "**Vs. Trainer Red!** (Attempt #1) "
});
$(` <input type="button" value="Badge"> `).appendTo(btnbox).click(() => {
  textarea.value += "**Defeated Leader Misty and received the Cascade Badge! **"
});
$(` <input type="button" value="TM"> `).appendTo(btnbox).click(() => {
  textarea.value += "**Received TM90 Snarl! **"
});
$(` <input type="button" value="Mart"> `).appendTo(btnbox).click(() => {
  textarea.value += "**Bought/Sold 10 Potions! **"
});
$(` <br/> `).appendTo(btnbox);

$(` <input type="button" value="Poké"> `).appendTo(btnbox).click(() => {
  textarea.value += "Poké"
});
$(` <input type="button" value="₽"> `).appendTo(btnbox).click(() => {
  textarea.value += "₽"
});
$(` <input type="button" value="♂"> `).appendTo(btnbox).click(() => {
  textarea.value += "♂"
});
$(` <input type="button" value="♀"> `).appendTo(btnbox).click(() => {
  textarea.value += "♀"
});
$(` <input type="button" value="ᴾᴋ"> `).appendTo(btnbox).click(() => {
  textarea.value += "ᴾᴋ"
});
$(` <input type="button" value="ᴹɴ"> `).appendTo(btnbox).click(() => {
  textarea.value += "ᴹɴ"
});
$(` <input type="button" value="×"> `).appendTo(btnbox).click(() => {
  textarea.value += "×"
});
$(` <input type="button" value="Quick substitute"> `).appendTo(btnbox).click(() => {
  textarea.value.replace("$$", "₽").replace("Pokemon", "Pokémon").replace("Pokecenter", "Poké Center").replace("Pokemart", "Poké Mart").replace("pokecenter", "Poké Center").replace("pokemart", "Poké Mart").replace("pokeball", "Poké Ball").replace("Pokeball", "Poké Ball").replace("(male)", "♂").replace("(female)", "♀").replace("(pk)", "ᴾᴋ").replace("(mn)", "ᴹɴ").replace("(x)", "×").replace("NidoranM", "Nidoran♂").replace("NidoranF", "Nidoran♀");
});
$(` <br/> `).appendTo(btnbox);
$(` <br/> `).appendTo(btnbox);

// insert button bar into page
textarea.parentElement.insertBefore(btnbox, textarea);