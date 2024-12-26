lol();

function lol() {
	const n = ((window.screen.width * window.devicePixelRatio)/100)+1;
	for (let i = 1; i <= n; i++) {
		const grid = document.createElement("div");
		grid.setAttribute("class", "item");
		document.getElementById("containerid").appendChild(grid);
	}
}
//window.screen.width * window.devicePixelRatio;