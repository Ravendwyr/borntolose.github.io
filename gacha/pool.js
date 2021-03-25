
function buildPool(critCode = "", critValue = "") {
	
	var Connect = new XMLHttpRequest();
	Connect.open("GET", "pool.xml", false);
	Connect.setRequestHeader("Content-Type", "text/xml");
	Connect.send(null);
	
	var response = Connect.responseXML;
	var charas = response.childNodes[0];
	
	//console.log(critValue);
	
	if (critValue.length > 0) {
		
		for (i = 0; i < charas.children.length; i++) {
			
			for (j = 0; j < critValue.length; j++) {
				
				var currentChara = charas.children[i];
				var charaValue = currentChara.getElementsByTagName(critCode);
				
				if (charaValue.length > 0) {
					for (k = 0; k < charaValue.children.length; k++) {
						if (charaValue[0].children[k].textContent.toString() == critValue.children[j].textContent.toString()) {
							subResponse += charas.children[i];
						}
					}
				} else {
					console.log(charaValue);
					if (charaValue.textContent.toString() == critValue.children[j].textContent.toString()) {
							subResponse += charas.children[i];
					}
				}
				
			}
			
		}
		
		return subResponse;
	}
	
	return response;
}

