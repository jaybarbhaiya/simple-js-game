var oCharacter = document.getElementById("character"),
	oBlock = document.getElementById("block"),
	oPoints = document.getElementById("points"),
	iPoints = 0;

function jump() {
	var aClassList = oCharacter.classList;
	if (!aClassList.contains("animateJump")) {
		aClassList.add("animateJump");
	}

	setTimeout(() => {
		aClassList.remove("animateJump");
		iPoints += 10;
		oPoints.innerHTML = iPoints;
	}, 500);
}

document.getElementById("game").addEventListener("touchstart", (e) => {
	e.preventDefault();
	jump();
});

var checkDead = setInterval(() => {
	var iCharacterTop = parseInt(
			window.getComputedStyle(oCharacter).getPropertyValue("top"),
			10
		),
		iBlockLeft = parseInt(
			window.getComputedStyle(oBlock).getPropertyValue("left"),
			10
		);

	if (iBlockLeft > 0 && iBlockLeft < 20 && iCharacterTop >= 130) {
		oBlock.style.animation = "none";
		oBlock.style.display = "none";
		alert("Game over!");
	}
}, 10);
