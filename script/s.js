homepagebutton();

function homepagebutton() {
	const img = new Image();
	const n = 4;
	for (let i = 1; i <= n; i++) {
		;
		img.src = "/manga/test/images/" + i + ".png";
		const imgblk = document.createElement("img");
		imgblk.setAttribute("src", img.src);
		imgblk.setAttribute("id", "ningga");
		img.addEventListener("load", function () {
			document.getElementById("sus").appendChild(imgblk);
		}
		);
	}
}
