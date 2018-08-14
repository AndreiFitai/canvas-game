// window.onload = function () {
//   document.getElementById("start-btn").onclick = function () {
//     if (!isGameStarted) {
//       startGame();
//       isGameStarted = true;
//     }
//   };

// }

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d')

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var gameInterval = setInterval(gameplay, 1000/50)

var score = 0;

function drawScore(){
  ctx.font = "30px Arial";
  ctx.fillText("Score:"+score,10,50);
}

var updateCounter = 0

function gameplay(){
  ctx.clearRect(0,0,canvasWidth,canvasHeight);
  //globalAlpha for testing - please remove before final
  // ctx.globalAlpha = 0.2
  backgrounds.draw();
  createPlatform();
  drawPlatforms();
  createPlatform();
  player.draw();
  // createEnemy();
  playerMovement();
  moveEnemies();
  playerCollision();
  moveBullets();
  checkIfHit();
  clearEnemies();
  removePlatforms();
  clearArr();
  drawScore();
  updateCounter++;
}