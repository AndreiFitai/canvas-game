var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d')
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;


var explosionImg = new Image();
explosionImg.src = "images/explosion.png"
var maxTtl = 10


function drawExplosions() {
  for (var i = 0; i < explosions.length; i++) {
    ctx.drawImage(explosionImg, (maxTtl - explosions[i].ttl)*48, 0, 48, 48, explosions[i].x, explosions[i].y, 35,35);
  }
}