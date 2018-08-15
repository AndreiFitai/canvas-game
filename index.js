var isGameStarted = false;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d')

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var score = 0;
var lives = 200;
var explosions = [];
var gameInterval;
var updateCounter = 0
var music = new Audio();
music.src = "sounds/music.mp3";
music.loop = true;
music.volume = 0.5;

window.onload = function () {
  document.getElementById("start-btn").onclick = function () {
    if (!isGameStarted) {
      startGame();
        isGameStarted = true;
    }
  };
}

  


  function gameplay() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    //globalAlpha for testing - please remove before final
    // ctx.globalAlpha = 0.2
    drawBackgrounds();
    createPlatform();
    drawPlatforms();
    createPlatform();
    updateExplosions();
    drawExplosions();
    moveBullets();
    player.draw();
    createEnemy();
    playerMovement();
    moveEnemies();
    playerCollision();
    checkIfHit();
    checkIfHitWall();
    clearEnemies();
    removePlatforms();
    clearArr();
    drawScore();
    updateCounter++;
  }

function startGame(){
  gameInterval = setInterval(gameplay, 1000/50)
  music.play();
}


function drawScore() {
  ctx.font = "30px Arial";
  ctx.fillText("Score:" + score, 10, 50);
  ctx.fillText("Lives:" + lives, 800, 50)
}

function updateExplosions() {
  for (var i = 0; i < explosions.length; i++) {
    explosions[i].ttl--;
  }
  explosions = explosions.filter(function(e) { return e.ttl > 0 })
}
