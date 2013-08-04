
function setUp() {
	var links = document.getElementsByClassName("menuItem");
	for(var i = 0; i < links.length; i++) {
		links[i].addEventListener("mouseover", menuItemDown, false);
		links[i].addEventListener("mouseout", menuItemSmall, false);
	}
		
}

function menuItemDown(e) {
	console.log(e.target.id);
	e.target.style.width ="110px";
	e.target.style.height ="110px";
	
	
}
function menuItemSmall(e) {
	console.log(e.target.id);
	e.target.style.width ="100px";
	e.target.style.height ="100px";
	
	
}



window.onload = setUp;