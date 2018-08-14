var isGameStarted = false;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d')

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var score = 0;
var lives = 5;
var gameInterval;
var updateCounter = 0
var music = new Audio();
music.src = "sounds/music.mp3";
music.loop = true;

window.onload = function () {
  document.getElementById("start-btn").onclick = function () {
    if (!isGameStarted) {
      startGame();
        isGameStarted = true;
    }
  };

  function startGame(){
    gameInterval = setInterval(gameplay, 1000 / 50)
    music.play();
  }


  function drawScore() {
    ctx.font = "30px Arial";
    ctx.fillText("Score:" + score, 10, 50);
    ctx.fillText("Lives:" + lives, 800, 50)
  }


  function gameplay() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    //globalAlpha for testing - please remove before final
    // ctx.globalAlpha = 0.2
    backgrounds.draw();
    createPlatform();
    drawPlatforms();
    createPlatform();
    player.draw();
    createEnemy();
    playerMovement();
    moveEnemies();
    playerCollision();
    moveBullets();
    checkIfHit();
    checkIfHitWall();
    clearEnemies();
    removePlatforms();
    clearArr();
    drawScore();
    updateCounter++;
  }
}