var cloud;
var cloud1;
var cloud2;
var cloud3;
var cloud4;
var cloud5;
var cloud6;
var sun;
var raindrop;

function setup() {
  createCanvas(800, 500);
  
  cloud = createSprite(random(0, width), random(0, height));
  cloud.addImage(loadImage("assets/cloud.png"));
  
  cloud1 = createSprite(random(0, width), random(0, height));
  cloud1.addImage(loadImage("assets/cloud.png"));
  
  cloud2 = createSprite(random(0, width), random(0, height));
  cloud2.addImage(loadImage("assets/cloud.png"));
  
  cloud3 = createSprite(random(0, width), random(0, height));
  cloud3.addImage(loadImage("assets/cloud.png"));
  
  cloud4 = createSprite(random(0, width), random(0, height));
  cloud4.addImage(loadImage("assets/cloud.png"));
  
  cloud5 = createSprite(random(0, width), random(0, height));
  cloud5.addImage(loadImage("assets/cloud.png"));
  
  cloud6 = createSprite(random(0, width), random(0, height));
  cloud6.addImage(loadImage("assets/cloud.png"));
  
  cloud7 = createSprite(random(0, width), random(0, height));
  cloud7.addImage(loadImage("assets/cloud.png"));
  
  cloud8 = createSprite(random(0, width), random(0, height));
  cloud8.addImage(loadImage("assets/cloud.png"));
  
  cloud9 = createSprite(random(0, width), random(0, height));
  cloud9.addImage(loadImage("assets/cloud.png"));
  
  sun = createSprite(500, 200);
  sun.addImage(loadImage("assets/sun.png"));
  
  collectibles = new Group ();
  
  
   for(var i=0; i<50; i++)
    {
    var drop = createSprite(random(0, width), random(0,height));
    drop.addImage(loadImage("assets/raindrop.png"));
    collectibles.add(drop);
    }

text("Hello");

  
  // raindrop = createSprite(700, 300);
  // raindrop.addImage(loadImage("assets/raindrop.png"));
}

function draw() {
  background(176,236,245);  

  
  // face.position.x = mouseX
  // face.position.y = mouseY
  
  sun.velocity.x = (mouseX-sun.position.x)/10;
  sun.velocity.y = (mouseY-sun.position.y)/10;
  
  sun.displace(cloud);
  sun.displace(cloud1);
  sun.displace(cloud2);
  sun.displace(cloud3);
  sun.displace(cloud4);
  sun.displace(cloud5);
  sun.displace(cloud6);
  sun.displace(cloud7);
  sun.displace(cloud8);
  sun.displace(cloud9);

  sun.overlap(collectibles, collect);
  
    if(sun.getAnimationLabel() == "stretch" && sun.animation.getFrame() == sun.animation.getLastFrame())
  {
    sun.changeAnimation("normal");
  }
  
  drawSprites();
  
  fill('black');
  textFont("Helvetica");
  textSize(14); 
  textAlign(CENTER);
text("Push the clouds away and collect the raindrops to reveal a clear, beautiful day!", width/2, 50);
}

function collect(collector, collected)
{
  
  collector.changeAnimation("stretch");
  collector.animation.rewind();
 
  collected.remove();
}