
var pupilY = 110;
var pupilX = 150;

var teethColor = 0;

var centerX = 0;
var centerY = 0;

var mapX = 0;
var mapY = 0;

function setup() {
  createCanvas(310,500);
  
  
  //console.log(teethColor);
  
  centerX = width/2;
  centerY = height/2;
  console.log("centerX: " + centerX + " " + "centerY: " + centerY);
  
  
}

function draw() {
  background(255, 204, 0);
  var teethColor = color(255, 204, 0);
  console.log("mouseX" + mouseX + " mouseY:" + mouseY);
  
  mapX = map(mouseX, 0, width, -15,15);
  console.log(mapX);
  mapY = map(mouseY, 0, height, -15,15);
  
  //eyes
  fill(255);
  ellipse(150, 100, 120, 120);
  
  //pupils
  fill('rgba(0,255,0, 0.25)');
  ellipse(pupilX + mapX, pupilY + mapY, 60, 60);
  
  
  //nose
  fill(color(0, 0, 255));
  rect(100,180,100,75,35,35,35,35);
  fill('rgba(100%,0%,100%,0.5)')
  ellipse(130,220,35,35);
  ellipse(170,220,35,35);
  
  //mouth
  fill(255);
  rect(40, 280, 220, 150, 10, 10, 80, 80);
  line(90, 280, 90, 426);
  line(150, 280, 150, 430);
  line(210, 280, 210, 426);
  fill('#fae')
  rect(40, 335, 220, 20)
  
  
  fill(0);
  ellipse(mouseX, mouseY, 10, 10);
  
  
 
  
}