heartsArr = []

var heartImg = new Image();
heartImg.src = "images/heart.png"

function Heart(x, y) {
  this.height = 25;
  this.width = 25;
  this.posX = x;
  this.posY = y;
  this.img = heartImg;
}

function createHeart(x,y){
  if (Math.floor(Math.random() * 1000) < 50 && heartsArr.length < 2){
    heartsArr.push(new Heart(x,y))
  }
}

function moveHearts(speed){
  for ( var x = 0; x < heartsArr.length; x++ ){
    heartsArr[x].posX -= speed;
  }
}

function drawHearts(){
  for (let x = 0; x < heartsArr.length; x++) {
    ctx.drawImage(heartsArr[x].img,heartsArr[x].posX,heartsArr[x].posY,heartsArr[x].width,heartsArr[x].height )
  }
}

function destroyHeart(index){
  heartsArr.splice(index, 1);
}