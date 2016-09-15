var num = 100;
var num1 = 1;
var word = "hello";
var word1 = "goodbye";
var pupilY = 50;
var pupilX = 50;

var teethColor = 0;

var centerX = 0;
var centerY = 0;

var mapX = 0;
var mapY = 0;

function setup() {
  createCanvas(500,500);
  
  
  //console.log(teethColor);
  
  centerX = width/2;
  centerY = height/2;
  console.log("centerX: " + centerX + " " + "centerY: " + centerY);
  
  
}

function draw() {
  background(0, 0, 255);
  var teethColor = color(255, 204, 0);
  console.log("mouseX" + mouseX + " mouseY:" + mouseY);
  
  
  mapX = map(mouseX, 0, width, -25,25);
  console.log(mapX);
  mapY = map(mouseY, 0, height, -25,25);
  
  //eyes
  fill(255);
  ellipse(50, 50, 100, 100);
  ellipse(150, 50, 100, 100);
  
  //pupils
  fill(0);
  ellipse(pupilX + mapX, pupilY + mapY, 50, 50);
  ellipse(pupilX+100+mapX, pupilY + mapY, 50, 50);
  
  //nose
  fill(255, 0, 0);
  rect(125, 125, 30, 30);
  
  //mouth
  fill(teethColor);
  rect(50, 200, 200, 200, 0, 20, 50, 20);
  line(50, 300, 250, 300);
  line(125, 200, 125, 400);
  line(175, 200, 175, 400);
  
  ellipse(centerX, centerY, 10, 10);
  
  fill(0);
  ellipse(mouseX, mouseY, 10, 10);
  
  
 
  
}