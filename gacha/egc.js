var allowedKeys = {
	37: 'left',
	38: 'up',
	39: 'right',
	40: 'down',
	65: 'a',
	66: 'b'
};

var konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];

var konamiCodePosition = 0;

document.addEventListener('keydown', function(e) {
var key = allowedKeys[e.keyCode];
var requiredKey = konamiCode[konamiCodePosition];

if (key == requiredKey) {

	konamiCodePosition++;

	if (konamiCodePosition == konamiCode.length) {
		activateCheats();
		konamiCodePosition = 0;
	}
} else {
	konamiCodePosition = 0;
}
});

function activateCheats() {
	
	var Connect = new XMLHttpRequest();
	Connect.open("GET", "gacha/pool.xml", false);
	Connect.setRequestHeader("Content-Type", "text/xml");
	Connect.send(null);
	
	var response = Connect.responseXML;
	var charas = response.childNodes[0];
	
	for (i = 0; i < charas.children.length; i++) {
		
		var currentChara = charas.children[i];
		
		var id = currentChara.getElementsByTagName("id");
		
		localStorage.setItem(id[0].textContent.toString(), "owned");
		
	}
	
	console.log(localStorage);

}