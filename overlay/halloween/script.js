
function mainLoop(fast) {
	
	var interval = fast ? 30000 : 300000;
	var randWait = fast ? 0 : 150000;
	
	//if (fast) {
		//setTimeout(() => {
			createImage();
			$("#imageContainer").fadeTo(5000, 0.4);
			setTimeout(() => {
				$("#imageContainer").fadeTo(5000, 0);
				setTimeout(() => {
					document.getElementById("imgElement").remove();
				}, 5000);
			}, 20000);
	
		//}, Math.floor(Math.random() * randWait));
	//}
	
	var nextTimeout = Math.floor(Math.random() * randWait);
	console.log("Next wait: " + ((interval+nextTimeout-20000)/60000).toFixed(2) + " minutes"); 
	
	setInterval(() => {
		setTimeout(() => {
			createImage();
			$("#imageContainer").fadeTo(5000, 0.4);
			setTimeout(() => {
				$("#imageContainer").fadeTo(5000, 0);
				setTimeout(() => {
					document.getElementById("imgElement").src = "";
					document.getElementById("imgElement").remove();
				}, 5000);
			}, 20000);
	
		}, nextTimeout);
		
		nextTimeout = Math.floor(Math.random() * randWait);
		console.log("Next wait: " + ((interval+nextTimeout-20000)/60000).toFixed(2) + " minutes"); 
		
	}, interval);
 
} 

function createImage() {
	
	var posX = Math.floor(Math.random() * 1771)-50;
	var posY = Math.floor(Math.random() * 931)-50;
	var rotAngle = Math.floor(Math.random() * 91)-45;
	
	var imgCont = document.getElementById("imageContainer");
	var imgElem = document.createElement("img");
	imgElem.id = "imgElement";
	imgElem.src = "images/" + pickRandomImage();
	imgElem.style.maxHeight = "300px";
	imgElem.style.maxWidth = "300px";
	imgElem.style.height = "auto";
	imgElem.style.width = "auto";
	imgCont.style.marginLeft = posX;
	imgCont.style.marginTop = posY;
	imgCont.style.marginTop = posY;
	imgCont.style.rotate = rotAngle + "deg";
	imgCont.style.opacity = 0;
	imgCont.appendChild(imgElem);
	
}

function pickRandomImage() {
	
	const imageList = [
		"bloody_handprint.png",
		"flak.png",
		"ghost.png",
		"gore.png",
		"message_001.png",
		"message_002.png",
		"message_003.png",
		"message_004.png",
		"message_005.png",
		"message_006.png",
		"message_007.png",
		"message_009.png",
		"message_010.png",
		"message_011.png",
		"message_013.png",
		"message_014.png",
		"olden.png",
		"scream.png",
		"white_hand.png",
		"darkrai_bw.gif",
		"haunter_crystal.gif",
		"gengar_crystal.gif",
		"ghost_rgb.gif",
		"message_008.gif",
		"message_012.gif",
		"nene.gif",
		"olden.gif",
		"phancero.gif",
		"tv_face.gif",
		"unownking.gif",
		"yuri_eyes.gif"
	];
	
	return imageList[Math.floor(Math.random() * imageList.length)];
	
}