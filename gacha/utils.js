
function getCooldown() { 
	return 60000;
}

function calcDexCompletion() {  

	var Connect = new XMLHttpRequest();
	Connect.open("GET", "pool.xml", false);
	Connect.setRequestHeader("Content-Type", "text/xml");
	Connect.send(null);

	var response = Connect.responseXML;
	var charas = response.childNodes[0];
	
	var totalCharas = charas.children.length;
	var ownedCharas = 0.0;
	
	for (i = 0; i < charas.children.length; i++) {
		
		var currentChara = charas.children[i];
					
		var id = currentChara.getElementsByTagName("id");
		
		if (localStorage.getItem(id[0].textContent.toString()) == "owned") {
			
			ownedCharas += 1.0;
			
		}
		
	}
	
	return ((ownedCharas/totalCharas)*100).toFixed(1);

}

function updateCompletion() {  

	document.getElementById("completionRate").innerHTML = "Current completion rate: " + calcDexCompletion() + "%";

}

function setSeason(runName) {  

	var Connect = new XMLHttpRequest();
	Connect.open("GET", "seasons.xml", false);
	Connect.setRequestHeader("Content-Type", "text/xml");
	Connect.send(null);

	var response = Connect.responseXML;
	var seasons = response.childNodes[0];
	
	for (i = 0; i < seasons.children.length; i++) {
		
		var currentSeason = seasons.children[i];
		var color = seasons.children[i].getElementsByTagName("color")[0].textContent.toString();
		//console.log(currentSeason);
		//console.log(color);
			
		for (j = 0; j < currentSeason.getElementsByTagName("runs")[0].children.length; j++) {
			
			var currentRun = currentSeason.getElementsByTagName("runs")[0].children[j];
			//console.log(currentRun);
			
			if (currentRun.textContent.toString() == runName) {
				return "<i style=\"color:" + color + "\">" + runName + "</i>";
			}
			
		}
	}
	
	return "<i style=\"color:" + color + "\">" + runName + "</i>";

}