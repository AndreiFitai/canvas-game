var cloudLone = new Image();
cloudLone.src = "/images/bg_layers/cloud_lonely.png";
var cloudsBG = new Image();
cloudsBG.src = "/images/bg_layers/clouds_BG.png";
var cloudsMG1 = new Image();
cloudsMG1.src = "/images/bg_layers/clouds_MG_1.png";
var cloudsMG2 = new Image();
cloudsMG2.src = "/images/bg_layers/clouds_MG_2.png";
var cloudsMG3 = new Image();
cloudsMG3.src = "/images/bg_layers/clouds_MG_3.png";
var mountains = new Image();
mountains.src = "/images/bg_layers/mountains.png";
var sky = new Image();
sky.src = "/images/bg_layers/sky.png";

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var bgSky = {
  height: canvasHeight,
  width: canvasWidth+200,
  posX: 0,
  posX2: canvasWidth+200,
  posY: 0,
  draw: function(){
    ctx.drawImage(sky,this.posX,0, this.width, this.height)
    ctx.drawImage(sky,this.posX2,0, this.width, this.height);
  },
  move: function(speed){
    if (this.posX+this.width < 0){
      this.posX = this.posX2+this.width
    }  
    this.posX -= speed;
    if (this.posX2+this.width < 0)  {
      this.posX2 = this.posX+this.width
    }
    this.posX2 -= speed;
  }
}

var bgCloudsBG = {
  height: canvasHeight,
  width: canvasWidth+200,
  posX: 0,
  posX2: canvasWidth+200,
  posY: 0,
  draw: function(){
    ctx.drawImage(cloudsBG,this.posX,0, this.width, this.height)
    ctx.drawImage(cloudsBG,this.posX2,0, this.width, this.height);
  },
  move: function(speed){
    if (this.posX+this.width < 0){
      this.posX = this.posX2+this.width
    }  
    this.posX -= speed;
    if (this.posX2+this.width < 0)  {
      this.posX2 = this.posX+this.width
    }
    this.posX2 -= speed;
  }
}

var bgCloudLone = {
  height: canvasHeight,
  width: canvasWidth+200,
  posX: 0,
  posX2: canvasWidth+200,
  posY: 0,
  draw: function(){
    ctx.drawImage(cloudLone,this.posX,0, this.width, this.height)
    ctx.drawImage(cloudLone,this.posX2,0, this.width, this.height);
  },
  move: function(speed){
    if (this.posX+this.width < 0){
      this.posX = this.posX2+this.width
    }  
    this.posX -= speed;
    if (this.posX2+this.width < 0)  {
      this.posX2 = this.posX+this.width
    }
    this.posX2 -= speed;
  }
}


var bgMountains = {
  height: canvasHeight,
  width: canvasWidth+200,
  posX: 0,
  posX2: canvasWidth+200,
  posY: 0,
  draw: function(){
    ctx.drawImage(mountains,this.posX,0, this.width, this.height)
    ctx.drawImage(mountains,this.posX2,0, this.width, this.height);
  },
  move: function(speed){
    if (this.posX+this.width < 0){
      this.posX = this.posX2+this.width
    }  
    this.posX -= speed;
    if (this.posX2+this.width < 0)  {
      this.posX2 = this.posX+this.width
    }
    this.posX2 -= speed;
  }
}

var bgCloudsMG3 = {
  height: canvasHeight,
  width: canvasWidth+200,
  posX: 0,
  posX2: canvasWidth+200,
  posY: 0,
  draw: function(){
    ctx.drawImage(cloudsMG3,this.posX,0, this.width, this.height)
    ctx.drawImage(cloudsMG3,this.posX2,0, this.width, this.height);
  },
  move: function(speed){
    if (this.posX+this.width < 0){
      this.posX = this.posX2+this.width
    }  
    this.posX -= speed;
    if (this.posX2+this.width < 0)  {
      this.posX2 = this.posX+this.width
    }
    this.posX2 -= speed;
  }
}

var bgCloudsMG2 = {
  height: canvasHeight,
  width: canvasWidth+200,
  posX: 0,
  posX2: canvasWidth+200,
  posY: 0,
  draw: function(){
    ctx.drawImage(cloudsMG2,this.posX,0, this.width, this.height)
    ctx.drawImage(cloudsMG2,this.posX2,0, this.width, this.height);
  },
  move: function(speed){
    if (this.posX+this.width < 0){
      this.posX = this.posX2+this.width
    }  
    this.posX -= speed;
    if (this.posX2+this.width < 0)  {
      this.posX2 = this.posX+this.width
    }
    this.posX2 -= speed;
  }
}

var bgCloudsMG1 = {
  height: canvasHeight,
  width: canvasWidth+200,
  posX: 0,
  posX2: canvasWidth+200,
  posY: 0,
  draw: function(){
    ctx.drawImage(cloudsMG1,this.posX,0, this.width, this.height)
    ctx.drawImage(cloudsMG1,this.posX2,0, this.width, this.height);
  },
  move: function(speed){
    if (this.posX+this.width < 0){
      this.posX = this.posX2+this.width
    }  
    this.posX -= speed;
    if (this.posX2+this.width < 0)  {
      this.posX2 = this.posX+this.width
    }
    this.posX2 -= speed;
  }
}


function drawBackgrounds(){
  bgSky.draw();
  bgCloudsBG.draw();
  bgCloudLone.draw();
  bgMountains.draw();
  bgCloudsMG3.draw();
  bgCloudsMG2.draw();
  bgCloudsMG1.draw();
}

function moveBackgrounds(speed){
  bgSky.move(speed);
  bgCloudsBG.move(speed-4.5);
  bgCloudLone.move(speed-4);
  bgMountains.move(speed-3);
  bgCloudsMG3.move(speed-2);
  bgCloudsMG2.move(speed-1);
  bgCloudsMG1.move(speed);
}