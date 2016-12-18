

var ghost;
var bg;
var SCENE_W = 1600;
var SCENE_H = 800;


function setup() {
  createCanvas(800,400);

  ghost = createSprite(400, 200, 50, 50);
  //ghost = ellipse(400, 200, 50, 100);
  

}

function draw() {
background(255,255,255);  
  
  //mouse trailer, the speed is inversely proportional to the mouse distance
  ghost.velocity.x = (camera.mouseX-ghost.position.x)/20;
  ghost.velocity.y = (camera.mouseY-ghost.position.y)/20;
  
  //a camera is created automatically at the beginning
  
  //.5 zoom is zooming out (50% of the normal size)
  if(mouseIsPressed)
    camera.zoom = .5;
  else
    camera.zoom = 1;
  
  //set the camera position to the ghost position
  camera.position.x = ghost.position.x;
  camera.position.y = ghost.position.y;
  
  //limit the ghost movements
  if(ghost.position.x < 0)
    ghost.position.x = 0;
  if(ghost.position.y < 0)
    ghost.position.y = 0;
  if(ghost.position.x > SCENE_W)
    ghost.position.x = SCENE_W;
  if(ghost.position.y > SCENE_H)
    ghost.position.y = SCENE_H;
  
  //draw the scene
  //rocks first
  //drawSprites(bg);
  
  //shadow using p5 drawing
  noStroke();
  fill(0,0,0,20);
  //shadow
  ellipse(ghost.position.x, ghost.position.y+90, 80, 30);
  //character on the top
  //drawSprite(ghost);
  
 
  camera.off();
  image(frame,0,0);
 
 
 
}
