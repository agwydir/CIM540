var centerX = 0;
var centerY = 0;


function setup(){
  createCanvas(500,500);
  centerX = width/2;
  centerY = height/2;
  
}

function draw(){
  /*
  if(mouseY < centerY){
    console.log("Above CenterY");
    fill(255,0,0);
  }
  if(mouseY > centerY){
    console.log("Below CenterY");
    fill(0,255,0);
  }
  
  if(mouseY == centerY){
    console.log("Centered");
    fill(0,0,255);
  }
  
*/  
  ellipse(centerX, centerY, 40, 40);




if(mouseX < centerX){
  console.log("Left");
  fill(255,0,0);
}

if(mouseX > centerX){
  console.log("Right");
  fill(0,255,0);
}

if(mouseX == centerX){
  console.log("Center");
  fill(0,0,255);
}

}
  