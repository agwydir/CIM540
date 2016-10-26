var img0;
var img1;
var img2;

var imageArray = [];
var counter = 0;



function setup() {
  createCanvas(850, 825);
  
  img0 = loadImage("animal1 copy.png");  
  img1 = loadImage("animal2 copy.png");  
  img2 = loadImage("animal3 copy.png"); 
  
  
  
  imageArray[0] = img0;
  imageArray[1] = img1;
  imageArray[2] = img2;
  
button = createButton('Next Image');
button.position(100, 62);
button.mousePressed(next);
  
}

function draw() {
  image(img0, 50, 0);
  image(img0, 0, height, img0.width, img0.height);
  
  image(img1, 50, 0);
  image(img1, 0, height, img1.width, img1.height);
  
  image(img2, 50, 0);
  image(img2, 0, height, img2.width, img2.height);
}


function next() {
  

  
// console.log(counter);
 
//     if(counter == 0){
//     imageArray[0];
//   }
//   else if(counter == 1){
//     imageArray[1];
//   }
//   else if(counter == 2){
//     imageArray[2];
//   }
//   else{
//     counter = 0;
//   }
}