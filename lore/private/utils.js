
function dispNotes(sectionName) {  

	var allSections = document.getElementById(sectionName).parentElement;
	
	console.log(allSections);
	
	for (i = 0; i < allSections.children.length; i++) {

		allSections.children[i].style = "display:none;";
		
	}
	
	document.getElementById(sectionName).style = "";

}