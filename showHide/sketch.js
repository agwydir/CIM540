var showHide = false;


function setup() {
  
  
}


function draw() {
  background(255);
  if(showHide == true){
    ellipse(width/2, height/2, 20, 20);
  }
  
}

function mousePressed() {
  showHide = true;
}

function mouseReleased() {
  showHide = false;
}