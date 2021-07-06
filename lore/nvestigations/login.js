
function addListener() {  

	var input = document.getElementById("inputPwd");

	input.addEventListener("keyup", function(event) {
	
	  if (event.keyCode === 13) {
		document.getElementById("inputBtn").click();
	  }
	});
}

function pwdHint() {  

	var hint = "n******h*******g******";

	if (document.getElementById("pwdHint").innerHTML == "") {
		document.getElementById("pwdHint").innerHTML = hint;
	} else {
		document.getElementById("pwdHint").innerHTML = "";
	}
	
}

function checkPwd() {  

	var pass = "936fa5dc0c1d6994955e22c38e72cee1";
	var input = document.getElementById("inputPwd").value;
	
	if (CryptoJS.MD5(input).toString() == pass) {
		window.location.href = "./index.html";
	} else {
		document.getElementById("errorArea").style = "";
		document.getElementById("inputPwd").value = "";
	}	

}