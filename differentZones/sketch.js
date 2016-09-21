var topBoundary = 0;
var bottomBoundary = 0;
var boundary0 = 0;
var boundary1 = 0;
var boundary2 = 0;

var buttonSize = 100;

var brushSize = 10;
var brushColor = "black";

var currentArea = "";

var counter = 0;

function setup() {
  createCanvas(200,300);
  noStroke();
  
  topBoundary = 100;
  bottomBoundary = height;
  
  boundary0 = 0;
  boundary1 = 100;
  boundary2 = 200;
 
}

function draw() {
  background(255);
  if(counter == 1){
    fill("yellow");
  }
  else if(counter == 2){
    fill("purple");
  }
  else if(counter == 3){
    fill("black")
  }
  else{
    counter = 0;
    fill("grey");
  }
rect(50, 20, 55, 55);

  fill("purple");
  rect(boundary0, topBoundary, buttonSize, buttonSize);
  fill("blue");
  rect(boundary1, topBoundary, buttonSize, buttonSize);
  
  if(mouseY > topBoundary && mouseY < bottomBoundary){
    //console.log("color picker area");
    if(mouseX > boundary0 && mouseX < boundary1){
      //console.log("area1");
      currentArea = "area1";
  }else if(mouseX > boundary1 && mouseX < boundary2){
    //console.log("area2");
    currentArea = "area2";

  }
  
  }else{
    currentArea = "";
  }
  
  fill(brushColor);
  ellipse(mouseX, mouseY, brushSize, brushSize);
  
  
}

function mousePressed(){
  counter = counter +1
  
  console.log(currentArea);
  
  if(currentArea == "area1"){
    brushSize++;
  }else if(currentArea == "area2"){
    brushSize--;
    if(brushSize<=1){
      brushSize=1;
    }
  }else{
    brushColor = "black";
  }
  
}



