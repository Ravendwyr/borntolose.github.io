
function checkCompleted() {
	if (calcDexCompletion() == 100) {
		document.getElementById("rollButton").innerHTML = "<button onclick='completedMsg()' style='font-size:large'>ROLL</button>";
	}
}

function completedMsg() {
	if (document.getElementById("pullImg").innerHTML == "") {
			document.getElementById("pullMsgUp").innerHTML = "<b>Your GachaDex is already complete!</b>";
		} else {
			document.getElementById("pullMsgDown").innerHTML = "<b>Your GachaDex is already complete!</b>";
		}
}

function buildPool() {
	
	var Connect = new XMLHttpRequest();
	Connect.open("GET", "pool.xml", false);
	Connect.setRequestHeader("Content-Type", "text/xml");
	Connect.send(null);
		
	var response = Connect.responseXML;
	var subResponse = "<charas>";
	var charas = response.childNodes[0];
		
	// Loop on characters
	for (i = 0; i < charas.children.length; i++) {
		
		var currentChara = charas.children[i];
				
		var id = currentChara.getElementsByTagName("id");
		
		if (localStorage.getItem(id[0].textContent.toString()) != "owned") {
			subResponse += currentChara.outerHTML;
		}
		
	}
	
	subResponse += "</charas>";
	var parser = new DOMParser();
	var xmlDoc = parser.parseFromString(subResponse, "text/xml");
	return xmlDoc;

	
	return response;
}

function dayPull() {
	
	var Connect = new XMLHttpRequest();
	Connect.open("GET", "daypool.xml", false);
	Connect.setRequestHeader("Content-Type", "text/xml");
	Connect.send(null);
	
	var day = new Date().getDate();
	if (day == 1 && (new Date()).getMonth() == 3) { day = 0 };
	var response = Connect.responseXML;
	var pools = response.childNodes[0];
	
	var critCode = response.childNodes[0].children[0].getElementsByTagName("tag");
	var critValue = response.childNodes[0].children[0].getElementsByTagName("values");
	
	// Get pool for the day
	for (i = 0; i < pools.children.length; i++) {
		var currentPool = pools.children[i];
		var currentDay = currentPool.getElementsByTagName("day");
		
		if (currentDay[0].textContent.toString() == day) { 
			critValue = currentPool.getElementsByTagName("values"); 
			break ; 
		}
	}
	
				
	var currentDate = (new Date()).getTime();
	var sinceLast = currentDate - localStorage.getItem("lastPullDate");
	
	if (localStorage.getItem("lastPullDate") == null || sinceLast > getCooldown()) {
		document.getElementById("pullMsgUp").innerHTML = "";
		document.getElementById("pullMsgDown").innerHTML = "";
		pullDayCharacter(critValue);
		localStorage.setItem("lastPullDate", currentDate);
	} else {
		if (document.getElementById("pullImg").innerHTML == "") {
			document.getElementById("pullMsgUp").innerHTML = "<b>Next pull possible in " + (Math.floor((getCooldown() - sinceLast) / 1000) + 1) + " seconds.</b>";
		} else {
			document.getElementById("pullMsgDown").innerHTML = "<b>Next pull possible in " + (Math.floor((getCooldown() - sinceLast) / 1000) + 1) + " seconds.</b>";
		}
	}
	
}

function guarPull() {
	
	var currentDate = (new Date()).getTime();
	var sinceLast = currentDate - localStorage.getItem("lastGuarPullDate");
	
	if (localStorage.getItem("lastGuarPullDate") == null || sinceLast > getLongCooldown()) {
		document.getElementById("pullMsgUp").innerHTML = "";
		document.getElementById("pullMsgDown").innerHTML = "";
		pullGuarCharacter();
		localStorage.setItem("lastGuarPullDate", currentDate);
	} else {
		if (document.getElementById("pullImg").innerHTML == "") {
			document.getElementById("pullMsgUp").innerHTML = "<b>Next pull possible in " + (Math.floor((getLongCooldown() - sinceLast) / 1000) + 1) + " seconds.</b>";
		} else {
			document.getElementById("pullMsgDown").innerHTML = "<b>Next pull possible in " + (Math.floor((getLongCooldown() - sinceLast) / 1000) + 1) + " seconds.</b>";
		}
	}
	
}

function pullGuarCharacter(critValue = "") {  
  
	var response = buildPool();
	var charas = response.childNodes[0];
	
	//console.log(charas);
	
	var randomNum = Math.floor(Math.random() * charas.childElementCount);
	
	//console.log(randomNum);

	var randomPull = charas.children[randomNum];
	
	//console.log(randomPull);
	
	var id = randomPull.getElementsByTagName("id");
	var name = randomPull.getElementsByTagName("name");
	var title = randomPull.getElementsByTagName("title");
	var game = randomPull.getElementsByTagName("game");
	var img = randomPull.getElementsByTagName("img");
	
	document.getElementById("pullImg").innerHTML = '<img src="sprites/' + img[0].textContent.toString() + '.png">';
	document.getElementById("pullName").innerHTML = "<b>" + name[0].textContent.toString() + "</b> ~ " + title[0].textContent.toString();
	document.getElementById("pullGame").innerHTML = setSeason(game[0].textContent.toString());
	document.getElementById("pullType").innerHTML = "";
	
	// For Mons, display types
	if (randomPull.getAttribute("category") == "pokemon") {
		
		for (i = 0; i < randomPull.getElementsByTagName("types")[0].children.length; i++) {
			
			var currentType = randomPull.getElementsByTagName("types")[0].children[i];
			//console.log(currentType);
			document.getElementById("pullType").innerHTML += '<img src="types/' + currentType.textContent.toString().toLowerCase() + '.png"> ';
			
		}
		
	}
	
	localStorage.setItem(id[0].textContent.toString(), "owned");
	
	updateCompletion();
	
	//console.log(localStorage);
 
} 