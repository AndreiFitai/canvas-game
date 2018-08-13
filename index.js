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

var background = {
  width: 600,
  height: 150,
  posX: 0,
  posY: 350,
  draw: function(){
    ctx.fillRect(this.posX,this.posY,this.width,this.height)
  }
}



setInterval(gameplay, 1000/50)

var score = 0;

function drawScore(){
  ctx.font = "30px Arial";
  ctx.fillText("Score:"+score,10,50);
}

var updateCounter = 0

function gameplay(){
  ctx.clearRect(0,0,600,500)
  ctx.globalAlpha = 0.2
  background.draw();
  player.draw();
  playerMovement();
  createEnemy();
  moveEnemies(enemiesArr);
  moveBullets(bulletsArr);
  checkIfHit(bulletsArr, enemiesArr);
  clearEnemies(enemiesArr);
  clearArr(bulletsArr);
  drawScore();
  updateCounter++;
}