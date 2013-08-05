
function setUp() {
	
	var buttons = document.getElementsByClassName("button");
	var shape = document.getElementsByClassName("shape");

	
	for(var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", buttonClick, false);
		
	} 
	
		
}

function blur(e) {
	alert("funker");
}

function buttonClick(e) {
	
	console.log(e.target);
	var button = e.target.id;
	var first = document.getElementById("first");
	if (button == "about") {
		first.style.marginTop ="-1300px";
		
	}

	else if (button == "contact") {
		first.style.marginTop ="-2350px";
	}

	else if (button == "mystuff") {
		first.style.marginTop ="-3400px";
	}
	
	

	

}

function buttonClickOut(e) {
	
	console.log(e.target.parentElement.parentElement);
	var shape = e.target.parentElement.parentElement;
	var img =shape.firstElementChild;
var button = e.target;
	var details = shape.getElementsByClassName("details")[0];
	var header = details.getElementsByClassName("heading")[0];
	img.style.height ="150px";
	img.style.width ="145px";
	shape.style.top ="0px"
	shape.style.right = "0px";
	details.style.width ="136px";
	details.style.marginLeft ="0";
	details.style.marginTop ="0";
	header.style.fontSize ="15px";
	button.removeEventListener("click", buttonClickOut, false);
	button.addEventListener("click", buttonClick, false);
	
}



window.onload = setUp;