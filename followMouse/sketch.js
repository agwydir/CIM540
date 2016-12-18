var face;


function setup() {
  createCanvas(300,300);
  face = ellipse(mouseX, mouseY, 30, 30);
}

function draw() {
  background(50);
  ellipse(mouseX + 30, mouseY + 40, 30, 30);
}