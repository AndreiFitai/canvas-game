var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d')
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;


var explosionImg = new Image();
explosionImg.src = "images/explosion.png"
var maxTtl = 10

var explode = {
  height: 35,
  width: 35,
  draw: function (x, y) {
    var initialIndex = updateCounter;
    var frameCount = 0;
    while (frameCount < 8) {
      if ((updateCounter % 15 == 0)) {
        ctx.drawImage(explosionImg, frameCount*44, 0, 44, 44, x-10, y, this.width, this.height)
        frameCount++;
      }
    }
  }
}


function drawExplosions() {
  for (var i = 0; i < explosions.length; i++) {
    ctx.drawImage(explosionImg, (maxTtl - explosions[i].ttl)*48, 0, 48, 48, explosions[i].x, explosions[i].y, 35,35);
  }
}