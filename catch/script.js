const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let basketX = 180; // 横の位置（初期位置は真ん中あたり）
const basketY = 380; // 縦の位置（画面の下の方）
const basketWidth = 40;  // 四角の横幅
const basketHeight = 20; // 四角の縦幅
let basketSpeed = 8;

let isLeftPressed = false;
let isRightPressed = false;

let itemX = Math.random() * (400 - basketWidth);
let itemY = 0;
const itemSize = 20;
let firstSpeed = 5;
let itemSpeed = firstSpeed;

let score = 0;

let itemType = Math.floor(Math.random() * 3);

let isGameOver = false;
let isGameStarted = false;

let nextThreshold = 5;
let showSpeedUp = false;

// 3. 画面に描画する関数（関数を実行すると絵が描かれる）
function draw() {

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.font = "40px serif"
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("🍵", basketX, basketY - 15);

	ctx.font = "30px serif"
	ctx.textAlign = "left";
	ctx.textBaseline = "top";

	if (itemType === 0) {
		ctx.fillText("🍡", itemX - 5, itemY - 5);
	}
	else if (itemType === 1) {
		ctx.fillText("🌸", itemX - 5, itemY - 5);
	}
	else if (itemType === 2) {
		ctx.fillText("💣", itemX - 5, itemY - 5);
	}


	if (itemSpeed === 0) {
		ctx.fillStyle = "#e91111";           // 文字の色を赤にする
		ctx.font = "bold 30px serif";   // 文字の太さと大きさとフォント
		ctx.textAlign = "center";            // 真ん中揃えにする

		// 画面の真ん中（横200, 縦200の位置）に文字を描く！
		ctx.fillText("GAME OVER", 200, 200);
		ctx.fillText("SCORE:" + score, 200, 250);

	}
	else {
		ctx.fillStyle = "#06330d";
		ctx.font = "bold 20px serif"
		ctx.textAlign = "left";
		ctx.fillText("SCORE:" + score, 20, 30);
	}

	if (itemSpeed > 0 && showSpeedUp === true) {
		ctx.fillStyle = "#e91111";

		ctx.font = "bold 40px sans-serif";
		ctx.textAlign = "center";

		ctx.fillText("SPEED UP!!", 200, 180);
	}

}



function update() {
	if (isGameStarted === false) {
		return;
	}
	//かご
	if (basketX > 0 && isLeftPressed) {
		basketX = basketX - basketSpeed;
	}
	if (basketX < 400 - basketWidth && isRightPressed) {
		basketX = basketX + basketSpeed;
	}
	//落ちてくるもの
	itemY = itemY + itemSpeed;

	if (itemY > 100) showSpeedUp = false;

	if (itemY + itemSize >= basketY &&
		itemX + itemSize >= basketX &&
		itemX <= basketX + basketWidth) {

		if (itemType === 2) {
			itemSpeed = 0;
			const btn = document.getElementById("startButton");
			btn.style.display = "block";
			btn.innerText = "Restart";
		} else {
			if (itemType === 0) score++;
			if (itemType === 1) score = score + 3;
		}

		if (score >= nextThreshold) {
			itemSpeed++;
			nextThreshold = nextThreshold + 5;
			showSpeedUp = true;
		}



		itemY = 0;
		itemX = Math.random() * (400 - itemSize);

		itemType = Math.floor(Math.random() * 3);
	}

	if (itemY > 400) {
		if (itemType === 2) {
			itemY = 0;
			itemX = Math.random() * (400 - itemSize);
			itemType = Math.floor(Math.random() * 3);
		} else {
			console.log("Game Over")
			itemY = 0;
			itemSpeed = 0;

			const btn = document.getElementById("startButton");
			btn.style.display = "block";
			btn.innerText = "Restart";
		}
	}

	if (isGameOver) return;
}

function gameLoop() {
	update();
	draw();
	requestAnimationFrame(gameLoop);
}

gameLoop();




window.addEventListener("keydown", function (event) {
	if (event.key === "ArrowLeft" || event.key === "a") {
		isLeftPressed = true;
	}
	if (event.key === "ArrowRight" || event.key === "d") {
		isRightPressed = true;
	}
});

window.addEventListener("keyup", function (event) {
	if (event.key === "ArrowLeft" || event.key === "a") {
		isLeftPressed = false;
	}
	if (event.key === "ArrowRight" || event.key === "d") {
		isRightPressed = false;
	}
});

const startButton = document.getElementById("startButton");

startButton.addEventListener("click", function () {

	if (itemSpeed === 0) {
		score = 0;
		itemSpeed = firstSpeed;
		itemY = 0;
		basketX = 180;
		itemType = Math.floor(Math.random() * 3);
		nextThreshold = 5;
		showSpeedUp = false;

	}

	isGameStarted = true;
	startButton.style.display = "none";
});