// variable declaration

var path;
var pathImg;
var runner;
var runner_Image;
var edges;

var left; var right;
function preload() {

    // pre-load images
  runner_Image = loadAnimation("Runner1.png","Runner2.png");
  pathImg = loadImage("path.png");
 


}

function setup() {
  createCanvas(400, 400);
  // create sprites here
    
  path = createSprite(200, 200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;
 
  runner = createSprite(200,200,10,10);
  runner.addAnimation("moving" , runner_Image);
  runner.velocityY = -3
  runner.scale = 0.1;
  edges = createEdgeSprites();
  
  left= createSprite(50,100,10,600)
  left.visible = false;
  right = createSprite(350,100,10,600)
  right.visible = false;
  
 

  
}

function draw() {
  background("white");
   // infinite ground
   if (path.y > 400) {
    path.y = height/2;
  
  }
 

  runner.x = mouseX;
  runner.collide(left);
  runner.collide(right);
  drawSprites();



}
