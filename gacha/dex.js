  
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
			
			if (currentChara.getAttribute("category") == "trainer") {
				document.getElementById("trainers").innerHTML += '<img src="' + location + '/portraits/' + icon[0].textContent.toString() + '.png" style="margin:2px">';
			} else {
				document.getElementById("mons").innerHTML += '<img src="' + location + '/portraits/' + icon[0].textContent.toString() + '.png" style="margin:2px">';
			}	
		
		}
		
	console.log(localStorage);
 
} 

function eraseDex() {  

	localStorage.clear();
	document.getElementById("trainers").innerHTML = "";
	document.getElementById("mons").innerHTML = "";
	displayDex();

}