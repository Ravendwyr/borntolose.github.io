
function displayDex(dexType, nfe=true) {  
  
	var Connect = new XMLHttpRequest();
	Connect.open("GET", dexType + ".xml", false);
	Connect.setRequestHeader("Content-Type", "text/xml");
	Connect.send(null);

	var response = Connect.responseXML;
	var mons = response.childNodes[0];
	
	clearAll(dexType);
	
	for (i = 0; i < mons.children.length; i++) {
		
		var currentMon = mons.children[i];
				
		if (nfe || currentMon.getAttribute("final") == "true") {
		
			color = backgroundFromRank(firstToString(currentMon, "rank"));
			
			star = '<div style="text-align:right;">' + getEmblem(firstToString(currentMon, "emblem")) + '</div>';
			
			tooltip = buildRunList(currentMon);
			
			img = '<img src="' + dexType + '/' + firstToString(currentMon, "num") + '.png" height="64px" title="' + tooltip +'">';
			
			document.getElementById(currentMon.getAttribute("region")).innerHTML += '<td style="height:140px; width:140px; border:solid 1px; display: inline-block; text-align:center; padding:2px; background-color:' + color + ';"><div style="margin-bottom:14px;"><b>'+ firstToString(currentMon, "num") + '<br>' + firstToString(currentMon, "name") +'</b></div>' + img + star + '</td>';
			
		}
			
	}
	
 
}

function firstToString(element, tag){
	
	return element.getElementsByTagName(tag)[0].textContent.toString();
	
}

function backgroundFromRank(rank){
	
	switch (rank) {
		case "main" : return "#7FFCBD"; break;
		case "side" : return "#B1F4FB"; break;
		case "inter" : return "#FEF9B2"; break;
		default: return "#FFFFFF";
	}

}

function getEmblem(emblem){
	
	switch (emblem) {
		case "main" : return "&#9733;"; break;
		case "side" : return "&#9734"; break;
		case "inter" : return "&#9734"; break;
		default: return "";
	}

}

function buildRunList(mon){
	
	tooltip = "";
	
	for (t = 0; t < mon.getElementsByTagName("run").length; t++) {
				tooltip += mon.getElementsByTagName("run")[t].textContent.toString() + "\n";
			}
	
	return tooltip;
	
}

function clearAll(dexType){
	
	if (dexType == "fakemon") {
		regions = ["none", "kanto", "johto", "hoenn", "sinnoh", "sinnoh", "unova", "kalos", "alola", "galar", "naljo", "kohto", "as-hoenn", "tohoak", "blz-hoenn", "nihon", "xgr-orre", "u-alola", "fus-johto", "sweetland", "solana", "larmog", "gensokyo", "dragonland"];
	} else {
		regions = ["kanto", "johto", "hoenn", "sinnoh", "unova", "kalos", "alola", "galar", "hisui", "paldea", "other"];
	}
	
	console.log(regions);
	
	for (i = 0; i < regions.length; i++) {
		document.getElementById(regions[i]).innerHTML = "";
	}
	
}

/*function displayDex() {  
  
	var Connect = new XMLHttpRequest();
	Connect.open("GET", "national.xml", false);
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
 
} */