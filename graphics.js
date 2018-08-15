var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d')
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;


var explosionImg = new Image();
explosionImg.src = "/images/explode1.png"

var exlpode {
  height : 35,
  width : 35,
  posX : 0,
  posY : 0,
  draw: function(x,y){
    ctx.drawImage(explosionImg,NEEDTOCOUNT3,0,height,width)
  }
}