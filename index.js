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

var updateCounter = 0

function gameplay(){
  ctx.clearRect(0,0,600,500)
  background.draw();
  player.draw();
  playerMovement();
  // enemies.draw()
  moveBullets(bulletsArr);
  clearArr(bulletsArr);
  updateCounter++
}