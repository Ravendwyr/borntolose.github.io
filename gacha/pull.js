  
function newPull() {
	
	var currentDate = (new Date()).getTime();
	var sinceLast = currentDate - localStorage.getItem("lastPullDate");
	
	if (localStorage.getItem("lastPullDate") == null || sinceLast > 60000) {
		document.getElementById("pullMsg").innerHTML = "";
		pullCharacter();
		localStorage.setItem("lastPullDate", currentDate);
	} else {
		document.getElementById("pullMsg").innerHTML = "<b>Next pull possible in " + (Math.floor((60000 - sinceLast) / 1000) + 1) + " seconds.</b>";
	}
	
}
  
function pullCharacter() {  
  
	var Connect = new XMLHttpRequest();
	Connect.open("GET", "pool.xml", false);
	Connect.setRequestHeader("Content-Type", "text/xml");
	Connect.send(null);

	var response = Connect.responseXML;
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
	
	//console.log(localStorage);
 
} 