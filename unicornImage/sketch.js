var img0;
var img1;
var img2;

//var imageArray = [];
var counter = 0;

var topBoundary = 0;
var bottomBoundary = 0;
var boundary0 = 0;
var boundary1 = 0;
var boundary2 = 0;
var boundary3 = 0;
var boundary4 = 0;

var brushSize;
var brushColor = "white";

var currentArea = "";

var slider;

var clearScreen;
var displayImage;

var drawingName;

function setup() {
  createCanvas(850, 825);
  
  img0 = loadImage("animal1.png");  
  // img1 = loadImage("animal2.png");  
  // img2 = loadImage("animal3.png"); 
  
  
  
  // imageArray[0] = img0;
  // imageArray[1] = img1;
  // imageArray[2] = img2;
  
  
  topBoundary = 600;
  bottomBoundary = 725;
  
  boundary0 = 102;
  boundary1 = 125;
  boundary3 = 232;
  boundary4 = 357;
  boundary5 = 362;
  boundary6 = 487;
  boundary7 = 492;
  boundary8= 617;
  boundary9 = 622;
  boundary10 = 747;

slider = createSlider(5, 50, 15);
slider.position(360, 730);

// button = createButton('Next Image');
// button.position(392, 762);
// button.mousePressed(next);

input = createInput('Name your drawing');
input.position(100, 760);

// button = createButton('GO');
// button.position(245, 780);
// button.mousePressed(name);
  
}

function draw() {
  noStroke();
 
   
 
  image(img0, 50, 0);
  image(img0, 0, height, img0.width, img0.height);
  
  // image(img1, 50, 0);
  // image(img1, 0, height, img1.width, img1.height);
  
  // image(img2, 50, 0);
  // image(img2, 0, height, img2.width, img2.height);
  

  
  
  //   if(counter == 0){
  //   imageArray[0];
  // }
  // else if(counter == 1){
  //   imageArray[1];
  // }
  // else if(counter == 2){
  //   imageArray[2];
  // }
  // else{
  //   counter = 0;
  // }
  
 // 
// if(clearScreen == true){
//   fill(255);
//   rect(0,50,300,300);
//   clearScreen = false;
// }
 
// if(displayImage == true){
// image(imageArray[counter], 0, 50, imageArray[counter].width, imageArray[counter].height);
// } 
  
  
  fill('white');
  rect(100, 570, 650, 335);
  fill(223, 128, 242);
  rect(boundary0, topBoundary, boundary1, 125);
  fill('orange');
  rect(boundary3, topBoundary, 125,125);
  fill('yellow');
  rect(boundary5, topBoundary, 125, 125);
  fill(126, 82, 230);
  rect(boundary7, topBoundary, 125, 125);
  fill(120, 238, 246);
  rect(boundary9, topBoundary, 125, 125);
  fill('white');
  ellipse(50, 300, 50, 50);
  fill('white');
  ellipse(800, 300, 50, 50);
  fill(158, 244, 66);
  rect(0, 0, 100, 750);
  fill(158, 244, 66);
  rect(750, 0, 100, 750);
  fill(158, 244, 66);
  rect(0, 750, 850, 150);
  fill(158, 244, 66);
  rect(0, 0, 850, 25);
  
  // fill('black');
  // textFont("Georgia");
  // textSize(18); 
  // text("Name your drawing",100, 770);

fill('black');
  textFont("Georgia");
  textSize(22); 
  textAlign(CENTER);
text(input.value(), width/2, 590);

  
  if(mouseY > topBoundary && mouseY < bottomBoundary){
    if(mouseX > boundary0 && mouseX < 227){
      currentArea = "area1";
  }else if(mouseX > boundary3 && mouseX < boundary4){
    currentArea = "area2";
  }else if(mouseX > boundary5 && mouseX < boundary6){
    currentArea = "area3";
  }else if(mouseX > boundary7 && mouseX < boundary8){
    currentArea = "area4";
  }else if(mouseX > boundary9 && mouseX < boundary10){
    currentArea = "area5";
  }else{
    currentArea = "";
}
}

 
  
  if(mouseIsPressed == true){
   fill(brushColor);
  ellipse(mouseX, mouseY, slider.value(), slider.value());
  
  
  
 }
  
}


function mousePressed(){
  console.log(currentArea);
  
  if(currentArea == "area1"){
    brushColor = color(223, 128, 242);
  }else if(currentArea == "area2"){
    brushColor = "orange";
  }else if(currentArea == "area3"){
    brushColor = "yellow";
  }else if(currentArea == "area4"){
    brushColor = color(126, 82, 230);
  }else if(currentArea == "area5"){
    brushColor = color(120, 238, 246);
  }
  
  counter = counter+1;
  if(counter >= 3){
    counter = 0;
  }
  console.log(counter);
}
  
  // counter++;
  // if(counter >= imageArray.length){
  //   counter = 0;
  
  


function next() {
counter = counter+1;
   if(counter >= 3){
  counter = 0;
  console.log(counter);
  }
  
  if(clearScreen == true){
  fill(255);
  rect(0,50,300,300);
  clearScreen = false;
}
 
if(displayImage == true){
image(imageArray[counter], 0, 50, imageArray[counter].width, imageArray[counter].height);
} 
 

}

function name(){

}

