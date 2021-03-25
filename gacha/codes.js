
function checkCode() {
	
	var Connect = new XMLHttpRequest();
	Connect.open("GET", "codes.xml", false);
	Connect.setRequestHeader("Content-Type", "text/xml");
	Connect.send(null);

	var response = Connect.responseXML;
	var codes = response.childNodes[0];
	var input = document.getElementById("secretCode").value;
	var id = null;

	for (i = 0; i < codes.children.length; i++) {
		var currentCode = codes.children[i];
		var code = currentCode.getElementsByTagName("code");
		
		if (code[0].textContent.toString() == CryptoJS.MD5(input).toString()) { id = currentCode.getElementsByTagName("id"); break ; }
	}
	
	if (id == null) {
		document.getElementById("pullImg").innerHTML = "";
		document.getElementById("pullName").innerHTML = "";
		document.getElementById("pullGame").innerHTML = "";
		document.getElementById("pullType").innerHTML = "";
		document.getElementById("errorMsg").innerHTML = "<b>But nothing happened.</b>";
	} else {
		document.getElementById("errorMsg").innerHTML = "";
		pullChara(id);
	}
	
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