
function setUp() {
	
	var buttons = document.getElementsByClassName("button");
	var shape = document.getElementsByClassName("shape");
	var stuff = document.getElementsByClassName("stuff");
	var more = document.getElementsByClassName("more");
	
	for(var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", buttonClick, false);
		
	} 

	for(var i = 0; i < stuff.length; i++) {
		stuff[i].addEventListener("click", showStuff, false);
		
	}
	for(var i = 0; i < more.length; i++) {
		more[i].addEventListener("click", backShowStuff, false);
	}
	
	
		
}

function backShowStuff(e) {
	var more = document.getElementsByClassName("more");
	for(var i = 0; i < more.length; i++) {
		more[i].style.top ="-600px";
	}
	var blur = document.getElementsByClassName("blur");
	

		for(var i = 0; i < blur.length; i++ ) {
		blur[i].className = blur[i].className.replace("blur", '');
		}
		for(var i = 0; i < blur.length; i++ ) {
		blur[i].className = blur[i].className.replace("blur", '');
		}
		for(var i = 0; i < blur.length; i++ ) {
		blur[i].className = blur[i].className.replace("blur", '');
		}
		
	
	
	var h1 = e.target.parentElement.parentElement.firstElementChild;
	h1.className = h1.className.replace( "blur" , '' );
}

function showStuff(e) {
	
	var text = "more"+e.target.parentElement.id
	var moreapp = document.getElementById(text);
	var blur = moreapp.parentElement.getElementsByClassName("stuff");
	var h1 = moreapp.parentElement.firstElementChild;
	moreapp.style.top = "-200px";

	for( var i = 0; i < blur.length; i++ ) {
		blur[i].className ="stuff blur";
	}
	h1.className ="blur";

	var body = document.getElementsByTagName("body")[0];
	
	

	// all stuff be blured
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