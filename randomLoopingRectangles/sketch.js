function setup() {
  createCanvas(1000,1000);
  //noStroke();
  for(var counter = 0; counter <300; counter++){
    fill(random(255), random(255), random(255), random(255));
    rect(random(width), random(height), random(width), random(height));
  }
}

function draw() {
  frameRate(10);
  background(255);
  for(var counter = 0; counter <300; counter++){
    fill(random(255), random(255), random(255), random(255));
    rect(random(width), random(height), random(width), random(height));
  } 
}