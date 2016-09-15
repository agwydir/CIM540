var showHide = true;
var mouseState = false;


function setup() {
  
  
}


function draw() {
  background(255);
  //console.log(mouseIsPressed);
  mouseState = mouseIsPressed;
  
  if(mouseState == true){
    ellipse(width/2, height/2, 20, 20);
  }
  
}

/*function mousePressed() {
  showHide = true;
}

function mouseReleased() {
  showHide = false;
}
 */