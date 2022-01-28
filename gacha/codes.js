
function checkCode() {
	
	var Connect = new XMLHttpRequest();
	Connect.open("GET", "codes.xml", false);
	Connect.setRequestHeader("Content-Type", "text/xml");
	Connect.send(null);

	var response = Connect.responseXML;
	var codes = response.childNodes[0];
	var input = document.getElementById("secretCode").value;
	var id = null;
	
	checkKane(input);
	if (input == "") {
		document.getElementById("pullImg").innerHTML = "";
		document.getElementById("pullName").innerHTML = "";
		document.getElementById("pullGame").innerHTML = "";
		document.getElementById("pullType").innerHTML = "";
		document.getElementById("errorMsg").innerHTML = "<b>...</b>";
		return 0;
	}

	for (i = 0; i < codes.children.length; i++) {
		var currentCode = codes.children[i];
		var code = currentCode.getElementsByTagName("code");
		
		if (code[0].textContent.toString() == CryptoJS.MD5(input).toString()) { id = currentCode.getElementsByTagName("id"); break ; }
		//console.log(code[0].textContent.toString());
		//console.log(CryptoJS.MD5(input).toString());
		
	}
	
	if (id == null) {
		document.getElementById("pullImg").innerHTML = "";
		document.getElementById("pullName").innerHTML = "";
		document.getElementById("pullGame").innerHTML = "";
		document.getElementById("pullType").innerHTML = "";
		document.getElementById("errorMsg").innerHTML = "<b>" + randomFailMsg() + "</b>";
	} else {
		document.getElementById("errorMsg").innerHTML = "";
		pullChara(id);
	}
	
	updateCompletion();
	
}

function pullChara(idMD5) {
	
	var Connect = new XMLHttpRequest();
	Connect.open("GET", "pool.xml", false);
	Connect.setRequestHeader("Content-Type", "text/xml");
	Connect.send(null);

	var response = Connect.responseXML;
	var charas = response.childNodes[0];
	
	for (i = 0; i < charas.children.length; i++) {
		var currentChara = charas.children[i];
		var id = currentChara.getElementsByTagName("id");
		if (CryptoJS.MD5(id[0].textContent.toString()) == idMD5[0].textContent.toString()) { break ; }
	}
	
	var id = currentChara.getElementsByTagName("id");
	var name = currentChara.getElementsByTagName("name");
	var title = currentChara.getElementsByTagName("title");
	var game = currentChara.getElementsByTagName("game");
	var img = currentChara.getElementsByTagName("img");
	
	document.getElementById("pullImg").innerHTML = '<img src="sprites/' + img[0].textContent.toString() + '.png">';
	document.getElementById("pullName").innerHTML = "<b>" + name[0].textContent.toString() + "</b> ~ " + title[0].textContent.toString();
	document.getElementById("pullGame").innerHTML = setSeason(game[0].textContent.toString());
	document.getElementById("pullType").innerHTML = "";
	
	//For Mons, display type
	if (currentChara.getAttribute("category") == "pokemon") {
		
		for (i = 0; i < currentChara.getElementsByTagName("types")[0].children.length; i++) {
			
			var currentType = currentChara.getElementsByTagName("types")[0].children[i];
			//console.log(currentType);
			document.getElementById("pullType").innerHTML += '<img src="types/' + currentType.textContent.toString().toLowerCase() + '.png"> ';
			
		}
		
	}
	
	localStorage.setItem(id[0].textContent.toString(), "owned");
	
	//console.log(localStorage);
}

function checkKane(input) {
	
	if (input.toLowerCase().replace(/ +/g, "") == "yugnatsucks") {
		document.getElementsByTagName("body")[0].outerHTML = "<body style='background-color:darkgray'></body>";
		setInterval(function() { 
			array = ["&nbsp;&nbsp;&nbsp;", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;", "<b>", "<i>", "<br>", "<span style='color:red'>", "<span style='font-size:large'>", "<span style='background-color:red'>", "<span style='font-size:small'>", "<a style='color:darkred' href='javascript:alert(\"Darn, jist an error message\")'>"]
			document.getElementsByTagName("body")[0].innerHTML += array[Math.floor(Math.random()*10)] + array[Math.floor(Math.random()*10)] + array[Math.floor(Math.random()*10)] + "Darn, jist an error message "; 
		}, 100);
		return 0;
	}	
	
}

function randomFailMsg() {
	
	var msgArray = [
					"But nothing happened.",
					"CODE FALLED BORT",
					"Printer Error 2<br><br>Check the Game Boy Printer manual.<br>Press B to cancel.",
					"This is so sad, M4 play <a style='color:black' href='https://www.youtube.com/watch?v=zmcpSyxdX5A'>Born to Lose</a>.",
					"The situation is a bit of a stalemate.",
					"An error has occurred.<br> Hold down the POWER Button to turn off the power, then turn it on and try again.<br> For help, visit twitch.tv/twitchplayspokemon.",
					"Silly hacker!",
					"oh no!",
					"Hello, we got a problem, we can't finish the dex because this page is stuck at Dewfon and we don't have a secret code, is it possible to make something for putting us back please ? Like the list of hints ? Thanks for your reading.",
					"⠠⠚⠑⠃⠁⠊⠞⠑⠙",
					"#NeverLucky",
					"Now is not the time to use that.",
					"BOOOOOOOOO",
					"Codes are a complex topic, Tim.",
					"Nope, there's only trash here.",
					"Today's password! Let me think... It's <span onmouseover=\"this.innerHTML='&nbsp;？？？？？'\">" + ["ିпᔿ฿ܿ", "⨿ⴿⴿᴿ∿", "☿ਿ␿Կᨿ", "ᬿि࠿⸿┿", "⠿ሿဿܿⴿ", "ᐿℿ᤿ిĿ", "∿ⰿؿ̿⬿", "ి᤿ؿिܿ", "ؿᔿ〿ିؿ", "ȿ⸿ⴿ☿࠿"][Math.floor(Math.random()*10)] + "</span>! Don't forget it!",
					"This code's use is forbidden in the Orre region.",
					"<img src='misc/tppTeiHard.png'>",
					"The miracle never happen.",
					"Fine, I'll look after <a style='color:black' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>GASTLY</a> for a while.",
					"BULLET GIVEN BY BET-BOY",
					"Were you expecting something else?",
					"Are ya stupid?",
					"Not even a nibble...",
					"<div style='color:red'>An exception occurred</div>Processor:&nbsp; ARM11 (core 0)<br>Exception type:&nbsp; data abort<br>Fault status:&nbsp; Translation - Section<br>Current process:&nbsp; kujira-2 (0004000000055E00)",
					"DISCONNECTED FROM HOST",
					"This code contains inappropriate text.",
					"unsupported command: " + document.getElementById("secretCode").value.toLowerCase().replace(/ +/g, ""),
					"<style>body {background-image: url('misc/olden.png'); background-repeat:no-repeat; background-position:center;}</style>",
					"<i>If you can read this, i didn't accidentally destroy the database</i>",
					"</b><b>C</b>ome to<b>8</b> ERROR.<b>",
					"PLEASE DON'T NOT ASK FOR NEXT BETA RELEASE<br>I GET TIRE OF<br>WORKING ON IT ALL TIME.<br>NOBODY LETS PLAY LAST VERSION!!!.<br>SO FUCK THIS. I'MM NOT FINNISH IT BECAUSE NOBODY CARE!!!!<br>YOU ALL ARE MOTHERFUCK AND I TAKE SHIT ON YOURE HACKING FORUM<br>FUCK.<br>YOU."
					];
	var randomNum = Math.floor(Math.random() * msgArray.length);
	
	if (Math.floor(Math.random() * 5) > 1) {
		return msgArray[0];
	} else {
		return msgArray[randomNum];
	}
	
}