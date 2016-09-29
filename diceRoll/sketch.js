function setup() {
  
}

function draw() {
  
}

function mousePressed(){
  var currentRoll = diceRoll(6);
  
  if(currentRoll == 3){
    console.log("You are the champion");
  }else{
    console.log("Another one bites the dust");
  }
}

function diceRoll(diceSize){
  var curRoll = int(random(1,diceSize+1));
  return curRoll
}