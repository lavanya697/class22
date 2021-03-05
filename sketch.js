var fixedRect,movingRect;
const world;
const engine;
const bodies;

function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  
  rect3=createSprite(100,100,30,40);

  movingRect.shapeColor="lime";
  fixedRect.shapeColor="blue";
}

function draw() 
{
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;


if(istouching(movingRect,rect3))
{
  movingRect.shapeColor="green"
  text("they are touching",50,50)
  movingRect.width=160;
}
else
{
  movingRect.shapeColor="lime";
  rect3.shapeColor="blue";
  movingRect.width=80;
}


  drawSprites();
}


