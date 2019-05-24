var overlay = document.getElementById("overlay");

function showOverlay(clicked_image_src) {
	overlay.style.display = "block";
	document.getElementById("expanded").src = clicked_image_src;
}

function hideOverlay() {
	overlay.style.display = "none";
}