
function currentPoolTitle() {
	
	var Connect = new XMLHttpRequest();
	Connect.open("GET", "daypool.xml", false);
	Connect.setRequestHeader("Content-Type", "text/xml");
	Connect.send(null);
	
	var day = new Date().getDay();
	var response = Connect.responseXML;
	var pools = response.childNodes[0];
	
	var poolName = response.childNodes[0].children[0].getElementsByTagName("name");
	
	// Get pool for the day
	for (i = 0; i < pools.children.length; i++) {
		var currentPool = pools.children[i];
		var currentDay = currentPool.getElementsByTagName("day");
		
		if (currentDay[0].textContent.toString() == day) { 
			poolName = currentPool.getElementsByTagName("name");
			break ; 
		}
	}
	
	return poolName[0].textContent.toString();
	
}

function buildPool(critCode = "", critValue = "") {
	
	var Connect = new XMLHttpRequest();
	Connect.open("GET", "pool.xml", false);
	Connect.setRequestHeader("Content-Type", "text/xml");
	Connect.send(null);
		
	var response = Connect.responseXML;
	var subResponse = "<charas>";
	var charas = response.childNodes[0];
		
	if (critValue.length > 0) {
		
		// Loop on characters
		for (i = 0; i < charas.children.length; i++) {
			
			var currentChara = charas.children[i];
			//console.log(currentChara);
			
			// Loop on criteria values
			for (j = 0; j < critValue[0].children.length; j++) {
								
				var charaValue = currentChara.getElementsByTagName(critCode[0].textContent.toString());
				//console.log(charaValue);
								
				if (charaValue.length > 0) {
					if (charaValue[0].children.length > 0) {
						
						// Loop on character values
						for (k = 0; k < charaValue[0].children.length; k++) {
							if (charaValue[0].children[k].textContent.toString() == critValue[0].children[j].textContent.toString()) {
								subResponse += currentChara.outerHTML;
							}
						}
						
					} else {	
					
						//console.log(charaValue[0].textContent.toString());
						//console.log(critValue[0].children[j].textContent.toString());
						
						if (charaValue[0].textContent.toString() == critValue[0].children[j].textContent.toString()) {
								subResponse += currentChara.outerHTML;
						}
						
					}
				}
				
			}
			
		}
		
		subResponse += "</charas>";
		var parser = new DOMParser();
		var xmlDoc = parser.parseFromString(subResponse, "text/xml");
		return xmlDoc;
	}
	
	return response;
}


function dayPull() {
	
	var Connect = new XMLHttpRequest();
	Connect.open("GET", "daypool.xml", false);
	Connect.setRequestHeader("Content-Type", "text/xml");
	Connect.send(null);
	
	var day = new Date().getDay();
	var response = Connect.responseXML;
	var pools = response.childNodes[0];
	
	var critCode = response.childNodes[0].children[0].getElementsByTagName("tag");
	var critValue = response.childNodes[0].children[0].getElementsByTagName("values");
	
	// Get pool for the day
	for (i = 0; i < pools.children.length; i++) {
		var currentPool = pools.children[i];
		var currentDay = currentPool.getElementsByTagName("day");
		
		if (currentDay[0].textContent.toString() == day) { 
			critCode = currentPool.getElementsByTagName("tag");
			critValue = currentPool.getElementsByTagName("values"); 
			break ; 
		}
	}
	
				
	var currentDate = (new Date()).getTime();
	var sinceLast = currentDate - localStorage.getItem("lastPullDate");
	
	if (localStorage.getItem("lastPullDate") == null || sinceLast > getCooldown()) {
		document.getElementById("pullMsgUp").innerHTML = "";
		document.getElementById("pullMsgDown").innerHTML = "";
		pullDayCharacter(critCode, critValue);
		localStorage.setItem("lastPullDate", currentDate);
	} else {
		if (document.getElementById("pullImg").innerHTML == "") {
			document.getElementById("pullMsgUp").innerHTML = "<b>Next pull possible in " + (Math.floor((getCooldown() - sinceLast) / 1000) + 1) + " seconds.</b>";
		} else {
			document.getElementById("pullMsgDown").innerHTML = "<b>Next pull possible in " + (Math.floor((getCooldown() - sinceLast) / 1000) + 1) + " seconds.</b>";
		}
	}
	
}


function pullDayCharacter(critCode = "", critValue = "") {  
  
	var response = buildPool(critCode, critValue);
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