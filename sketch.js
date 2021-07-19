var road, roadImage;
var boy, boyImage;
var re, le;

function preload(){
  //pre-load images

  roadImage = loadImage("path.png");
  boyImage = loadAnimation("Runner-1.png", "Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here

  road = createSprite(200,200);
  road.velocityY = 8;
  road.addImage(roadImage);

  boy = createSprite(180,340,30,30);
  boy.addAnimation("running", boyImage);
  boy.scale = 0.08;

  re = createSprite(400,0,50,800);
  re.visible = false;

  le = createSprite(0,0,50,800);
  le.visible = false;
  

}

function draw() {
  background(0);

  if(road.y>400){
    road.y=height/2
  }

  boy.x = World.mouseX
  boy.collide(re);
  boy.collide(le);

  drawSprites();

}
