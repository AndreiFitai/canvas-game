var isGameStarted = false;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d')

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var score = 0;
var lives = 200;
var explosions = [];
var gameInterval;
var deathScreenInterval;
var startScreenInterval;
var winScreenInterval;
var musicInt;
var updateCounter = 0
var music = new Audio();
// music.src = "sounds/music.mp3";
music.loop = true;
music.volume = 0.0;

window.onload = function () {
  startScreenInterval = setInterval(startScreen, 1000 / 50)
}


function startScreen() {
  drawStartScreen();
  drawStartButtons();
}

function restartGame() {
  musicInt = setInterval(setVolumeDown, 75);
  deathScreenInterval = setInterval(deathScreen, 1000 / 100)
}

function deathScreen() {
  drawDeathScreen();
  drawRestartButton();
}

function winScreen(){
  drawWinScreen();
  drawWinButton();
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
  moveBullets();
  player.draw();
  createEnemy();
  playerMovement();
  moveEnemies();
  playerCollision();
  checkIfHit();
  if(bossFight && movedWhileBoss > 1200){
    bossArr[0].drawHPBar();
    moveBoss();
    createBossBullet();
    moveBossBullets();
    emptyBossBulletArr();
    checkIfBossHit();
    checkIfWin();
  }
  drawExplosions();
  drawHearts();
  heartCollision();
  checkIfHitWall();
  clearEnemies();
  removePlatforms();
  clearArr();
  drawScore();
  updateCounter++;
}

function startGame() {
  clearInterval(winScreenInterval);
  if (isGameStarted == false) {
    music.play();
    isGameStarted = true;
    movedWhileBoss = 0;
    bossFight = false;
    bossArr.push(new Boss())
    bossLife = 100;
    musicInt = setInterval(setVolumeUp, 75);
    lives = 10;
    score = 0;
    player.posX = 200;
    player.posY = 100;
    bulletsArr = [];
    enemiesArr = [];
    platformArr = [];
    heartsArr = [];
    startingPlatforms = true;
    gameInterval = setInterval(gameplay, 1000 / 50)
  }
}

function checkIfWin(){
  if ( bossLife <= 0){
    console.log('called')
    musicInt = setInterval(setVolumeDown, 75);
    clearInterval(gameInterval);
    bossArr = [];
    isGameStarted == false;
    winScreenInterval = setInterval(winScreen, 1000/100)
  }
}

function setVolumeUp() {
  if (music.volume <= 0.25) {
    music.volume += 0.01;
  } 
  else
    clearInterval(musicInt)
}


function setVolumeDown() {
  if (music.volume > 0.01) {
    music.volume -= 0.01;
  } 
  else
    clearInterval(musicInt)
}

function drawScore() {
  ctx.font = "30px Helvetica";
  ctx.fillText("Score:" + score, 10, 50);
  ctx.fillText("Health:" + lives, 750, 50)
}

function updateExplosions() {
  for (var i = 0; i < explosions.length; i++) {
    explosions[i].ttl--;
  }
  explosions = explosions.filter(function (e) {
    return e.ttl > 0
  })
}

canvas.onclick = function (e) {
  var rect = canvas.getBoundingClientRect();
  x = (e.clientX - rect.left) / (rect.right - rect.left) * canvas.width;
  y = (e.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;
  if (isGameStarted) {
    if (isItClickedRestart(x, y)) {
      restartClick();
    }
  }
  else if (bossFight && isWinClicked(x,x)){
    startClick();
  } 
  else if (isItClicked(x, y)) {
    startClick();
  } 
  else if (isBossLvlClicked(x, y)){
    startClick();
    setBossLvl();
  }
}