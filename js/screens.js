var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d')
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var startBG = new Image();
startBG.src = "images/screens/mainscreen.png";
var button1 = new Image();
button1.src = "images/screens/start.png";
var deathBG = new Image();
deathBG.src = "images/screens/deathscreen.png"
restartBtn = new Image();
restartBtn.src = "images/screens/resetbutton.png"

function drawStartScreen() {
  this.img = startBG;
  ctx.drawImage(this.img, 0, 0, canvasWidth, canvasHeight)
}

function drawDeathScreen() {
  this.img = deathBG;
  ctx.drawImage(this.img, 0, 0, canvasWidth, canvasHeight)
}

var startButton =  {
  height: 45,
  width : 99,
  posX: (canvasWidth / 2) - (99 / 2),
  posY: (canvasHeight / 2) - (45/ 2),
  img: button1,
}

var restartButton = {
  height: 45,
  width : 99,
  posX: (canvasWidth / 2) - (99 / 2),
  posY: (canvasHeight) - (45)*2,
  img: restartBtn,
}

function drawStartButtons(){
  ctx.drawImage(startButton.img, startButton.posX,startButton.posY, startButton.width, startButton.height);
}

function drawRestartButton(){
  ctx.drawImage(restartButton.img, restartButton.posX,restartButton.posY, restartButton.width, restartButton.height);
}

function startClick() {
  clearInterval(startScreenInterval);
  startGame();
}

function restartClick(){
  isGameStarted = false
  clearInterval(deathScreenInterval)
  startGame();
}

function isItClicked(x, y) {
  return (x > startButton.posX && x < startButton.posX+startButton.width) && (y > startButton.posY && y < startButton.posY+startButton.height)
}

function isItClickedRestart(x, y) {
  return (x > restartButton.posX && x < restartButton.posX+restartButton.width) && (y > restartButton.posY && y < restartButton.posY+restartButton.height)
}