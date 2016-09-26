var randomPositionX = 0;
var randomPositionY = 0;
var numberOfEllipse = 300;
function setup() {
  createCanvas(500, 500);
  
  background(255);
  for (var i = 0; i < numberOfEllipse; i++) {
    randomPositionX = random(width);
    randomPostitionY = random(height);
    fill(random(255), random(255), random(255), random(255));
    ellipse(randomPositionX, randomPostitionY, 25, 25);
    fill(random(255), random(255), random(255), random(255));
    rect(random(width), random(height), 25, 25);

  }

}

function draw() {

  
}