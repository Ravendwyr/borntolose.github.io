// the text area that the buttons will insert text into
textarea = document.querySelector(".usertext-edit textarea")

// create button bar
const btnbox = document.createElement("div");
btnbox.classList.add('btnbox')

// create buttons, and insert each button into the button bar
/*$(`<a class="quickinserts">Time</a> `).appendTo(btnbox).click(() => {
  textarea.value += timeElapsed()
});*/

$(` <input type="button" value="[G]"> `).appendTo(btnbox).click(() => {
  textarea.value = "[G] " + textarea.value
});
$(` <input type="button" value="[S]"> `).appendTo(btnbox).click(() => {
  textarea.value = "[S] " + textarea.value
});
$(` <input type="button" value="[Info]"> `).appendTo(btnbox).click(() => {
  textarea.value = "[Info] " + textarea.value
});
$(` <input type="button" value="[Recap]"> `).appendTo(btnbox).click(() => {
  textarea.value = "[Recap] " + textarea.value
});
$(` <input type="button" value="[Chat]"> `).appendTo(btnbox).click(() => {
  textarea.value = "[Chat] " + textarea.value
});
$(` <input type="button" value="[Streamer]"> `).appendTo(btnbox).click(() => {
  textarea.value = "[Streamer] " + textarea.value
});
$(` <input type="button" value="[Fluff]"> `).appendTo(btnbox).click(() => {
  textarea.value = "[Fluff] " + textarea.value
});
$(` <input type="button" value="[Snark]"> `).appendTo(btnbox).click(() => {
  textarea.value = "[Snark] " + textarea.value
});
$(` <input type="button" value="[Meta]"> `).appendTo(btnbox).click(() => {
  textarea.value = "[Meta] " + textarea.value
});
$(` <input type="button" value="[Inter]"> `).appendTo(btnbox).click(() => {
  textarea.value = "[Intermission] " + textarea.value
});
$(` <br/> `).appendTo(btnbox);

$(` <input type="button" value="Catch"> `).appendTo(btnbox).click(() => {
  textarea.value += "**Caught a female Lv. 100 Wurmple!** Nickname: `NICKNAME`. "
});
$(` <input type="button" value="Lvl up"> `).appendTo(btnbox).click(() => {
  textarea.value += "**Wurmple grew to Lv. 100!** "
});
$(` <input type="button" value="Lvl up + Move"> `).appendTo(btnbox).click(() => {
  textarea.value += "**Wurmple grew to Lv. 100 and learned Tackle over Splash.** "
});
$(` <input type="button" value="Evo"> `).appendTo(btnbox).click(() => {
  textarea.value += "**Wurmple evolved into Cascoon!** "
});
$(` <input type="button" value="Vs."> `).appendTo(btnbox).click(() => {
  textarea.value += "**Vs. Trainer Red!** (Attempt #1) "
});
$(` <input type="button" value="Badge"> `).appendTo(btnbox).click(() => {
  textarea.value += "**Defeated Leader Misty and received the Cascade Badge!** "
});
$(` <input type="button" value="TM"> `).appendTo(btnbox).click(() => {
  textarea.value += "**Received TM90 Snarl!** "
});
$(` <input type="button" value="Mart"> `).appendTo(btnbox).click(() => {
  textarea.value += "**Bought/Sold 10 Potions!** "
});
$(` <input type="button" value="Going dark"> `).appendTo(btnbox).click(() => {
  textarea.value += "[Meta] The live updater is going dark. Check [#run-feed](https://discord.com/channels/927292379436814406/942158888311078944) on the Discord server for continued updates."
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
$(` <br/> `).appendTo(btnbox);
$(` <a class="quickinserts">Quick substitute</a> `).appendTo(btnbox).click(() => {
  textarea.value = textarea.value.replace("$$", "₽").replace("Pokemon", "Pokémon").replace("pokemon", "Pokémon").replace("Pokecenter", "Poké Center").replace("Pokemart", "Poké Mart").replace("pokecenter", "Poké Center").replace("pokemart", "Poké Mart").replace("pokeball", "Poké Ball").replace("Pokeball", "Poké Ball").replace("(male)", "♂").replace("(female)", "♀").replace("(m)", "♂").replace("(f)", "♀").replace("(pk)", "ᴾᴋ").replace("(mn)", "ᴹɴ").replace("(x)", "×").replace("NidoranM", "Nidoran♂").replace("NidoranF", "Nidoran♀");
});
$(` <br/> `).appendTo(btnbox);
$(` <br/> `).appendTo(btnbox);

/*$(`<a class="quickinserts">(BETA - Party Status)</a> `).appendTo(btnbox).click(() => { function mon_to_line(pokemon) { return "`" + pokemon.name + "`" + (pokemon.name != pokemon.species.name ? " (" + pokemon.species.name + ")" : "" ) + " " + (pokemon.gender == "Female" ? "%E2%99%80" : "") + (pokemon.gender == "Male" ? "%E2%99%82" : "") + " [" + (pokemon.held_item == null ? "No Item" : pokemon.held_item.name) + "] " + " Lv." + pokemon.level + " " + pokemon.moves.map(x => x.name).join(" / ") + "" }  function status_to_text(run_status) { return "" + "[info] $$" + run_status.money + " | Balls: " + run_status.ball_count + " | Pokedex: " + run_status.caught + " / " + run_status.seen + " / 649 \n\n" + run_status.party.map(mon_to_line).join("    \n") }  fetch("https://twitchplayspokemon.tv/api/run_status") .then(r => r.json()) .then(r => status_to_text(r)) .then(r =>  textarea.value += r) });*/

// insert button bar into page
textarea.parentElement.insertBefore(btnbox, textarea);