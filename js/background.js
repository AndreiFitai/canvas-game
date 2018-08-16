var cloudLone = new Image();
cloudLone.src = "images/bg_layers/cloud_lonely.png";
var cloudsBG = new Image();
cloudsBG.src = "images/bg_layers/clouds_BG.png";
var cloudsMG1 = new Image();
cloudsMG1.src = "images/bg_layers/clouds_MG_1.png";
var cloudsMG2 = new Image();
cloudsMG2.src = "images/bg_layers/clouds_MG_2.png";
var cloudsMG3 = new Image();
cloudsMG3.src = "images/bg_layers/clouds_MG_3.png";
var mountains = new Image();
mountains.src = "images/bg_layers/mountains.png";
var sky = new Image();
sky.src = "images/bg_layers/sky.png";

var speed = 5

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

function Background(img, speed) {
  this.img = img;
  this.speed = speed;
  this.height = canvasHeight;
  this.width = canvasWidth+200
  this.posX = 0
  this.posX2 = canvasWidth+200
  this.posY = 0
  this.draw = function(){
    ctx.drawImage(this.img,this.posX,0, this.width, this.height)
    ctx.drawImage(this.img,this.posX2,0, this.width, this.height);
  },
  this.move = function(){
    if (this.posX+this.width < 0){
      this.posX = this.posX2+this.width
    }  
    this.posX -= this.speed;
    if (this.posX2+this.width < 0)  {
      this.posX2 = this.posX+this.width
    }
    this.posX2 -= this.speed;
  }
}

var bgSky = new Background(sky, speed);
var bgCloudsBG = new Background(cloudsBG, speed-4.5);
var bgCloudLone = new Background(cloudLone, speed-4);
var bgMountains = new Background(mountains, speed-3);
var bgCloudsMG3 = new Background(cloudsMG3, speed-2);
var bgCloudsMG2 = new Background(cloudsMG2, speed-1);
var bgCloudsMG1 = new Background(cloudsMG1, speed);



function drawBackgrounds(){
  bgSky.draw();
  bgCloudsBG.draw();
  bgCloudLone.draw();
  bgMountains.draw();
  bgCloudsMG3.draw();
  bgCloudsMG2.draw();
  bgCloudsMG1.draw();
}

function moveBackgrounds(){
  bgSky.move();
  bgCloudsBG.move();
  bgCloudLone.move();
  bgMountains.move();
  bgCloudsMG3.move();
  bgCloudsMG2.move();
  bgCloudsMG1.move();
}