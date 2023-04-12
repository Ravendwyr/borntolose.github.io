
function displayDex(dexType) {  
  
	var Connect = new XMLHttpRequest();
	Connect.open("GET", dexType + ".xml", false);
	Connect.setRequestHeader("Content-Type", "text/xml");
	Connect.send(null);

	var response = Connect.responseXML;
	var mons = response.childNodes[0];
	
	clearAll(dexType);
	
	for (i = 0; i < mons.children.length; i++) {
		
		var currentMon = mons.children[i];
		
		var currentGen = document.getElementById("numGen").value;
		
		nfe = document.getElementById("showNFE").value;
		
		hofed = document.getElementById("showHoFed").value;
		
		nohofed = document.getElementById("showNoHoFed").value;
		
		stared = document.getElementById("showStared").value;
		
		nostared = document.getElementById("showNoStared").value;
		
		if ((!currentMon.getAttribute("debut") || currentMon.getAttribute("debut") <= parseInt(currentGen))
			&& (nfe == "show" || currentMon.getAttribute("final") >= parseInt(currentGen) || currentMon.getAttribute("final") == "true")
			&& (hofed == "show" || firstToString(currentMon, "rank") == "")
			&& (nohofed == "show" || firstToString(currentMon, "rank") != "")
			&& (stared == "show" || firstToString(currentMon, "emblem") != "main")
			&& (nostared == "show" || firstToString(currentMon, "emblem") == "main")) {
		
			color = backgroundFromRank(firstToString(currentMon, "rank"));
			
			type = '<div style="margin-top:7px; margin-left:1px; text-align:left; width:100px; float:left;">' + buildTypeList(currentMon) + '</div>';
			
			star = '<div style="text-align:right; width:20px; float:right;">' + getEmblem(firstToString(currentMon, "emblem")) + '</div>';
			
			tooltip = buildRunList(currentMon);
			
			img = '<img src="' + dexType + '/' + firstToString(currentMon, "num") + '.png" height="64px" title="' + tooltip +'">';
			
			document.getElementById(currentMon.getAttribute("region")).innerHTML += '<td style="height:140px; width:140px; border:solid 1px; display: inline-block; text-align:center; padding:2px; background-color:' + color + ';"><div style="margin-bottom:14px;"><b>'+ firstToString(currentMon, "num") + '<br>' + firstToString(currentMon, "name") +'</b></div>' + img + type + star + '</td>';
			
		}
			
	}
	
	nothingToDisplay(dexType);
 
}

function generateTeam(dexType, nfe) {  
  
	var Connect = new XMLHttpRequest();
	Connect.open("GET", dexType + ".xml", false);
	Connect.setRequestHeader("Content-Type", "text/xml");
	Connect.send(null);

	var response = Connect.responseXML;
	var mons = response.childNodes[0];
	
	document.getElementById("randomTeam").innerHTML = "";
	
	for (i = 0; i < 6; i++) {
	
		monNum = Math.floor(Math.random() * mons.children.length);

		currentMon = mons.children[monNum];
		
		currentGen = document.getElementById("numGen").value;
		
		if ((!currentMon.getAttribute("debut") || currentMon.getAttribute("debut") <= parseInt(currentGen))
			&& (nfe == "true" || currentMon.getAttribute("final") >= parseInt(currentGen) || currentMon.getAttribute("final") == "true")) {

			color = backgroundFromRank(firstToString(currentMon, "rank"));
					
			type = '<div style="margin-top:7px; margin-left:1px; text-align:left; width:100px; float:left;">' + buildTypeList(currentMon) + '</div>';
					
			star = '<div style="text-align:right; width:20px; float:right;">' + getEmblem(firstToString(currentMon, "emblem")) + '</div>';
					
			tooltip = buildRunList(currentMon);
					
			img = '<img src="' + dexType + '/' + firstToString(currentMon, "num") + '.png" height="64px" title="' + tooltip +'">';
					
			document.getElementById("randomTeam").innerHTML += '<td style="height:140px; width:140px; border:solid 1px; display: inline-block; text-align:center; padding:2px; background-color:' + color + ';"><div style="margin-bottom:14px;"><b>'+ firstToString(currentMon, "num") + '<br>' + firstToString(currentMon, "name") +'</b></div>' + img + type + star + '</td>';
			
		} else {
			
			i--;
		
		}
	
	}
	
}

function generateTeamAll(nfe) { 

	var Connect = new XMLHttpRequest();
	Connect.open("GET", "national.xml", false);
	Connect.setRequestHeader("Content-Type", "text/xml");
	Connect.send(null);

	var response = Connect.responseXML;
	var monsNational = response.childNodes[0];
	
	var Connect = new XMLHttpRequest();
	Connect.open("GET", "fakemon.xml", false);
	Connect.setRequestHeader("Content-Type", "text/xml");
	Connect.send(null);

	var response = Connect.responseXML;
	var monsFakemon = response.childNodes[0];
	
	document.getElementById("randomTeam").innerHTML = "";
	
	for (i = 0; i < 6; i++) {
	
		monNum = Math.floor(Math.random() * (monsNational.children.length + monsFakemon.children.length));
		
		currentGen = document.getElementById("numGen").value;
		
		if (monNum > monsNational.children.length) {
			dexType = "fakemon";
			monNum = monNum - monsNational.children.length;
			currentMon = monsFakemon.children[monNum];
		} else {
			dexType = "national";
			currentMon = monsNational.children[monNum];
		}
		
		if ((!currentMon.getAttribute("debut") || currentMon.getAttribute("debut") <= parseInt(currentGen))
			&& (nfe == "true" || currentMon.getAttribute("final") >= parseInt(currentGen) || currentMon.getAttribute("final") == "true")) {

			color = backgroundFromRank(firstToString(currentMon, "rank"));
					
			type = '<div style="margin-top:7px; margin-left:1px; text-align:left; width:100px; float:left;">' + buildTypeList(currentMon) + '</div>';
					
			star = '<div style="text-align:right; width:20px; float:right;">' + getEmblem(firstToString(currentMon, "emblem")) + '</div>';
					
			tooltip = buildRunList(currentMon);
					
			img = '<img src="' + dexType + '/' + firstToString(currentMon, "num") + '.png" height="64px" title="' + tooltip +'">';
					
			document.getElementById("randomTeam").innerHTML += '<td style="height:140px; width:140px; border:solid 1px; display: inline-block; text-align:center; padding:2px; background-color:' + color + ';"><div style="margin-bottom:14px;"><b>'+ firstToString(currentMon, "num") + '<br>' + firstToString(currentMon, "name") +'</b></div>' + img + type + star + '</td>';
			
		} else {
			
			i--;
		
		}
	
	}

}

function clickButton(dexType, id, text){
	
	button = document.getElementById(id);
	
	if (button.value == "show"){
		button.value = "hide";
		button.textContent = "Show " + text;
		
	} else {
		button.value = "show";	
		button.textContent = "Hide " + text;
	}
	
	displayDex(dexType);
	
}

function firstToString(element, tag){
	
	return element.getElementsByTagName(tag)[0].textContent.toString();
	
}

function backgroundFromRank(rank){
	
	switch (rank) {
		case "main" : return "#058E49"; break;
		case "side" : return "#0BACBD"; break;
		case "inter" : return "#908603"; break;
		default: return "";
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


function buildTypeList(mon){
	
	types = "";
	
	for (t = 0; t < mon.getElementsByTagName("type").length; t++) {
				types += '<img src="types/' + mon.getElementsByTagName("type")[t].textContent.toString().toLowerCase() + '.png">';
			}
	
	return types;
	
}

function clearAll(dexType){
	
	if (dexType == "fakemon") {
		regions = ["none", "kanto", "johto", "hoenn", "sinnoh", "sinnoh", "unova", "kalos", "alola", "galar", "naljo", "kohto", "as-hoenn", "tohoak", "blz-hoenn", "nihon", "xgr-orre", "u-alola", "fus-johto", "sweetland", "solana", "larmog", "gensokyo", "dragonland"];
	} else {
		regions = ["kanto", "johto", "hoenn", "sinnoh", "unova", "kalos", "alola", "galar", "hisui", "paldea", "other"];
	}
	
	for (i = 0; i < regions.length; i++) {
		document.getElementById(regions[i]).innerHTML = "";
	}
	
}

function nothingToDisplay(dexType){
	
	if (dexType == "fakemon") {
		regions = ["none", "kanto", "johto", "hoenn", "sinnoh", "sinnoh", "unova", "kalos", "alola", "galar", "naljo", "kohto", "as-hoenn", "tohoak", "blz-hoenn", "nihon", "xgr-orre", "u-alola", "fus-johto", "sweetland", "solana", "larmog", "gensokyo", "dragonland"];
	} else {
		regions = ["kanto", "johto", "hoenn", "sinnoh", "unova", "kalos", "alola", "galar", "hisui", "paldea", "other"];
	}
	
	for (i = 0; i < regions.length; i++) {
		if (document.getElementById(regions[i]).innerHTML == ""){
			document.getElementById(regions[i]).innerHTML = "<i>Nothing to display.</i>";
		}
	}
	
}
