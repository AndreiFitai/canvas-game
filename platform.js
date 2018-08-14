var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var platformArr = []
var startingPlatforms = true;
var pitCounter = 0;

function Platform(previousX,previousY) {
  this.width = 150;
  this.height = 500;
  this.posX = previousX+this.width;
  this.prevPosY = previousY;
  this.posY = 500 - randHeight();
  if ( this.prevPosY - this.posY > 100)
    this.posY = this.prevPosY-100
};

function PlatformThin(previousX,previousY) {
  this.width = 150;
  this.height = 25;
  this.posX = previousX+this.width;
  this.prevPosY = previousY;
  this.posY = 500 - randHeight();
  if ( this.prevPosY - this.posY > 100)
    this.posY = this.prevPosY-100
};

function randHeight(){
  if (startingPlatforms){
    return 300
  }
  else
    return (Math.floor(Math.random()*10))*25
}

function createPlatform(){
  if (startingPlatforms){
    platformArr.push(new Platform(150*(platformArr.length-1),500))
    if (platformArr.length === 8){
      startingPlatforms = false;
    }
  }
  else if(platformArr.length < 8 && pitCounter < 2){
    platformArr.push(new Platform(platformArr[platformArr.length-1].posX,platformArr[platformArr.length-1].posY))
    if(platformArr[platformArr.length-1].posY == 500)
      pitCounter++
  }
  else if(platformArr.length < 8){
    startingPlatforms = true;
    platformArr.push(new PlatformThin(platformArr[platformArr.length-1].posX,500))
    startingPlatforms = false;
    pitCounter = 0;
  }
}

function drawPlatforms() {
  for ( var x = 0; x < platformArr.length; x++){
    ctx.fillRect(platformArr[x].posX, platformArr[x].posY, platformArr[x].width, platformArr[x].height);
  }
}

function removePlatforms(){
  for ( var x = 0; x < platformArr.length; x++){
    if( platformArr[x].posX+150 < 0){
      platformArr.splice(x,1)
    }
  }
}

function movePlatforms(speed){
  for ( var x = 0; x < platformArr.length; x++ ){
    platformArr[x].posX -= speed;
  }
}