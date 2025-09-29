
function mainLoop(fast) {
	
	var interval = fast ? 30000 : 300000;
	var randWait = fast ? 0 : 150000;
	
	if (fast) {
		setTimeout(() => {
			createImage();
			$("#imageContainer").fadeTo(5000, 0.25);
			setTimeout(() => {
				$("#imageContainer").fadeTo(5000, 0);
				setTimeout(() => {
					document.getElementById("imgElement").remove();
				}, 5000);
			}, 20000);
	
		}, Math.floor(Math.random() * randWait));
	}
	
	setInterval(() => {
		setTimeout(() => {
			createImage();
			$("#imageContainer").fadeTo(5000, 0.25);
			setTimeout(() => {
				$("#imageContainer").fadeTo(5000, 0);
				setTimeout(() => {
					document.getElementById("imgElement").remove();
				}, 5000);
			}, 20000);
	
		}, Math.floor(Math.random() * randWait));
		
	}, interval);
 
} 

function createImage() {
	
	var posX = Math.floor(Math.random() * 1771)-50;
	var posY = Math.floor(Math.random() * 931)-50;
	var rotAngle = Math.floor(Math.random() * 91)-45;
	
	var imgCont = document.getElementById("imageContainer");
	var imgElem = document.createElement("img");
	imgElem.style.height = "100%";
	imgElem.id = "imgElement";
	imgElem.src = "images/" + pickRandomImage();
	imgCont.style.marginLeft = posX;
	imgCont.style.marginTop = posY;
	imgCont.style.rotate = rotAngle + "deg";
	imgCont.style.opacity = 0;
	imgCont.appendChild(imgElem);
	
}

function pickRandomImage() {
	
	const imageList = [
		"message_001.png",
		"message_002.png",
		"message_003.png",
		"white_hand.png",
		"haunter_crystal.gif",
		"gengar_crystal.gif"
	];
	
	return imageList[Math.floor(Math.random() * imageList.length)];
	
}