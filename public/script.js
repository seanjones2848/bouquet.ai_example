var charts = require('./charts.js');


function dropFunction() {
	document.getElementById("monthDrop").classlist.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdown = document.getElementsByClassName("dropdown-content");
		for (var i=0; i < dropdown.length; i++) {
			var openDropdown = dropdown[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}
