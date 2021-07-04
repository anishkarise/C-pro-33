function preload()
{
  bgIMG=loadImage("snow3.jpg")
  snowIMg=loadImage("snow4.webp")
}



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(bgIMG);
  spawnsnow();  
  drawSprites();
}

function spawnsnow()
{
  if (frameCount%60===0)
  {
    snow=createSprite(random(100,400),0,10,10);
    snow.addImage("snow",snowIMg);
    snow.velocityY=5
    snow.scale=0.3;
  }
}