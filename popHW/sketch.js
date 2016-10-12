var centerX = 0;
var centerY = 0;

function setup() {
  createCanvas(400, 400);
  centerX = width / 2;
  centerY = height / 2;
  
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  background(color(this.r, this.g, this.b));
   
   for(var i = 0; i<= 10; i++){
     multiDrawing(random(width), random(height), random(0,2));
     
   }
}

 

function draw() {
  

}

function multiDrawing(posX, posY, scaling){
  
  push();
  translate(posX - (centerX * scaling), posY - (centerY * scaling));
  scale(scaling);
  fill(255)
  strokeWeight(1);

  this.r = random(255);
  this.g = random(255);
  this.b = random(255);

  
  fill(this.r, this.g, this.b);
  ellipse(centerX, centerY, 100, 100);
  
  fill('black');
  ellipse(centerX - 10, centerY - 10, 10, 10);
  ellipse(centerX + 10, centerY - 10, 10, 10);
  rectMode(CENTER);
  
  fill(255);
  arc(centerX - 10, centerY + 20, 30, 30, 0, PI+QUARTER_PI, CHORD);
  
 
  
  pop();
  
  
}