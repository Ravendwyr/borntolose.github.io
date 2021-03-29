
function displayDex() {  
  
	var Connect = new XMLHttpRequest();
	Connect.open("GET", "pool.xml", false);
	Connect.setRequestHeader("Content-Type", "text/xml");
	Connect.send(null);

	var response = Connect.responseXML;
	var charas = response.childNodes[0];
	
		for (i = 0; i < charas.children.length; i++) {
			var currentChara = charas.children[i];
					
			var id = currentChara.getElementsByTagName("id");		
			var icon = currentChara.getElementsByTagName("img");
			
			var location = (localStorage.getItem(id[0].textContent.toString()) == "owned" ? "sprites" : "shadows");
			
			var onclick = ' onclick="showDexEntry(\'' + id[0].textContent.toString() + '\')"';
			
			if (currentChara.getAttribute("category") == "trainer") {
				document.getElementById("trainers").innerHTML += '<img' + onclick + ' src="' + location + '/portraits/' + icon[0].textContent.toString() + '.png" style="margin:2px">';
			} else {
				document.getElementById("mons").innerHTML += '<img' + onclick + ' src="' + location + '/portraits/' + icon[0].textContent.toString() + '.png" style="margin:2px">';
			}	
		
		}
		
	console.log(localStorage);
 
} 

function showDexEntry(charaId) {  

	var Connect = new XMLHttpRequest();
	Connect.open("GET", "pool.xml", false);
	Connect.setRequestHeader("Content-Type", "text/xml");
	Connect.send(null);

	var response = Connect.responseXML;
	var charas = response.childNodes[0];

	for (i = 0; i < charas.children.length; i++) {
		var currentChara = charas.children[i];
		var id = currentChara.getElementsByTagName("id");
		if (id[0].textContent.toString() == charaId) { break ; }
	}
	
	//console.log(currentChara);
	
	var name = currentChara.getElementsByTagName("name");
	var title = currentChara.getElementsByTagName("title");
	var game = currentChara.getElementsByTagName("game");
	var img = currentChara.getElementsByTagName("img");
	var desc = currentChara.getElementsByTagName("desc");
	var credits = currentChara.getElementsByTagName("credits");
	
	if (localStorage.getItem(charaId) == "owned") {
		document.getElementById("dexImage").innerHTML = '<img src="sprites/' + img[0].textContent.toString() + '.png">';
		document.getElementById("dexName").innerHTML = "<b>" + name[0].textContent.toString() + "</b>";
		document.getElementById("dexTitle").innerHTML = "<small>" + title[0].textContent.toString() + "</small>";
		document.getElementById("dexGame").innerHTML = setSeason(game[0].textContent.toString());
		document.getElementById("dexTypes").innerHTML = "";
		document.getElementById("dexText").innerHTML = desc[0].textContent.toString();
		document.getElementById("dexCredits").innerHTML = '<a href="' + credits[0].textContent.toString() + '">Image source</a>';
	} else {
		document.getElementById("dexImage").innerHTML = '<img src="shadows/' + img[0].textContent.toString() + '.png">';
		document.getElementById("dexName").innerHTML = "<b>???</b>";
		document.getElementById("dexTitle").innerHTML = "<small>???</small>";
		document.getElementById("dexGame").innerHTML = setSeason("???");
		document.getElementById("dexTypes").innerHTML = "";
		document.getElementById("dexText").innerHTML = "??????????";
	}
	
	// For Mons, display types
	if (currentChara.getAttribute("category") == "pokemon") {
		
		if (localStorage.getItem(charaId) == "owned") {
			for (i = 0; i < currentChara.getElementsByTagName("types")[0].children.length; i++) {
				
				var currentType = currentChara.getElementsByTagName("types")[0].children[i];
				document.getElementById("dexTypes").innerHTML += '<img src="types/' + currentType.textContent.toString().toLowerCase() + '.png"> ';
				
			}
		} else {
			document.getElementById("dexTypes").innerHTML += '<img src="types/unknown.png">';
		}
		
	}
	
}

function eraseDex() {  

	localStorage.clear();
	document.getElementById("trainers").innerHTML = "";
	document.getElementById("mons").innerHTML = "";
	displayDex();
	updateCompletion();

}
