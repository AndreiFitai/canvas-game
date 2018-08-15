var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d')
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;


var explosionImg = new Image();
explosionImg.src = "/images/explosion.png"

// var explode = {
//   height: 35,
//   width: 35,
//   draw: function (x, y) {
//     var initialIndex = 0
//     var frameCount = 0;
//     while (frameCount < 8) {
//       if ((updateCounter - initialIndex) % 15 == 10) {
//         ctx.drawImage(explosionImg, frameCount*44, 0, 44, 44, x-10, y, this.width, this.height)
//         frameCount++;
//       }
//       initialIndex++;
//     }
//   }
// }
