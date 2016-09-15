var counter = 0;

function setup() {
  createCanvas(500,500);
  
}

function draw() {
  background(255);
  counter = counter + 1;
  
  
  ellipse(counter, height/2, 10, 10);
  
  if(counter >= width){
    counter = 0;
    
  }
}
