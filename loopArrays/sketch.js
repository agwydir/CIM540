var randomHello = [];


function setup() {
  createCanvas(400,400);
  console.log(randomHello);
  randomHello.push("Hello");
  randomHello.push("Parev");
  randomHello.push("Goddag");
  randomHello.push("Bonjour");
  randomHello.push("Halo");
  randomHello.push("Aloha");
  randomHello.push("Shalom");
  randomHello.push("Sawubona");

}

function draw() {
  //while(randomHello.length > 0){
  //text(randomHello.pop(),random(width), random(height));
 // }
  //console.log(randomHello.length);
  
  for(var counter = 0; counter < randomHello.length; counter++){
    text(randomHello[counter], random(width), random(height));
    
  }
}