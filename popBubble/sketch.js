var bubble0;

var bubbleArray = [];


function setup() {
  createCanvas(400,400);
  bubble0 = new bubble(random(width), random(height), 100);
  
  for(var i = 0; i < 10; i++){
    bubbleArray.push(new bubble(random(width), random(height), 100));
    
    
  }
}

function draw() {
  background(255);
  var curBubbleState = bubble0.check(mouseX, mouseY);
  console.log(curBubbleState);
  bubble0.display(curBubbleState);
  bubble0.update(curBubbleState);
  
  for(var i = 0; i < bubbleArray.length; i++){
    var curBubbleState = bubbleArray[i].check(mouseX,mouseY);
    bubbleArray[i].display(curBubbleState);
    bubbleArray[i].update(curBubbleState);
  }
}

function bubble(tempX, tempY, tempSize){
  
  this.x = tempX;
  this.y = tempY;
  this.diameter = tempSize;
  
  //random color bubble fill
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  
  this.display = function(showHide){
    if(showHide == false){
    fill(this.r, this.g, this.b);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
  
  this.check = function(userX, userY){
    var curDist = dist(this.x, this.y, userX, userY);
    console.log(curDist);
    if(curDist < 50){
      console.log("hit");
      return true;
    }else{
      return false;
    }
  }
  
  
  this.update = function(runUpdate){
    
    if(runUpdate == true){
    this.x = random(width);
    this.y = random(height);
  }
  } 
}