var fixedR,movingR;

function setup() {
 createCanvas(1200,800);
 fixedR=createSprite(600, 400, 50, 80);
 fixedR.shapeColor="green";
 fixedR.debug=true;
 movingR=createSprite(400, 200, 80, 30);
 movingR.shapeColor="green";
 movingR.debug=true;
}

function draw() {
  background("black");  
  movingR.x=World.mouseX;
  movingR.y=World.mouseY;
  if(movingR.x-fixedR.x<movingR.width/2+fixedR.width/2&&fixedR.x-movingR.x<movingR.width/2+fixedR.width/2
    &&fixedR.y-movingR.y<movingR.width/2+fixedR.width/2&&movingR.y-fixedR.y<movingR.width/2+fixedR.width/2){
 movingR.shapeColor="red";
 fixedR.shapeColor="red";
  }
  else{
    movingR.shapeColor="green";
    fixedR.shapeColor="green";
  }
  drawSprites();
}