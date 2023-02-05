const gameContainer = document.getElementById("game-container");
const gameObject = document.createElement("div");
gameObject.className = "game-object";
gameContainer.appendChild(gameObject);

let x = 50;
let y = 50;
let step = 50;

document.onkeydown = function (event) {
  switch (event.key) {
    case "ArrowUp":
      y = Math.max(y - step, 0);
      break;
    case "ArrowDown":
      y = Math.min(
        y + step,
        gameContainer.offsetHeight - gameObject.offsetHeight
      );
      break;
    case "ArrowLeft":
      x = Math.max(x - step, 0);
      break;
    case "ArrowRight":
      x = Math.min(
        x + step,
        gameContainer.offsetWidth - gameObject.offsetWidth
      );
      break;
  }
  gameObject.style.top = y + "px";
  gameObject.style.left = x + "px";
};
