javascript: (
  function() { 
    const gameName = "Super Gauntlet Scarlet & Violet";
    const gameStartTime = 1721682000000;


    const timeElapsed = () => {   
      "use strict";   
      const elapsed = (new Date().getTime() - new Date(gameStartTime).getTime()) / 1000;    
      if (elapsed >= 0) {  
        const diff = {};  
        diff.days    = Math.floor(elapsed / 86400); 
        diff.hours   = Math.floor(elapsed / 3600 % 24); 
        diff.minutes = Math.floor(elapsed / 60 % 60); 
        diff.seconds = Math.floor(elapsed % 60);  
        document.querySelector(".usertext-edit textarea").value = `${diff.days}d ${diff.hours}h ${diff.minutes}m ${document.querySelector(".usertext-edit textarea").value}`; 
      } else { 
        alert(`Pok\u{00E9}mon ${gameName} hasn't started yet!\nIt starts ${new Date(gameStartTime).toString()}!`); 
        } 
    };  
    function LiveUpdaterAppend () { 
      "use strict"; document.querySelector("div.bottom-area").insertAdjacentHTML("beforeend", `<a role="button" id="tpptime" class="reddiquette" style="cursor:pointer" title="Click to add the current timestamp since we started playing Pok\u{00E9}mon ${gameName}">Add current time</a>`); 
      const TPPScript = document.createElement("script"); 
      TPPScript.src = "https://borntolose.github.io/liveupdater/tpptime_script.js";
      document.body.appendChild(TPPScript); 
      document.getElementById("tpptime").addEventListener("click", timeElapsed, false); 
      document.querySelector(".footer-parent").insertAdjacentHTML("beforebegin", `<span id="TPPTimeVersion">1.0.42</span>`); 
    } 
    LiveUpdaterAppend();
  })
();