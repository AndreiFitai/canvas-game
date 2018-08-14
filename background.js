var img = new Image();
img.src = "/images/backgrounds/glacial_mountains.png";

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var backgrounds = {
  height: canvasHeight,
  width: canvasWidth+200,
  posX: 0,
  posX2: canvasWidth+200,
  posY: 0,
  draw: function(){
    ctx.drawImage(img,this.posX,0, this.width, this.height)
    ctx.drawImage(img,this.posX2,0, this.width, this.height);
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