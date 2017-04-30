var threshold = 30;
var accChangeX = 0; 
var accChangeY = 0;
var accChangeT = 0;
//var interval = 150;
//preMillis

//var k=150;
function setup(){
  createCanvas(800, 800, WEBGL);
  frameRate(8);
   perspective(80/ 180 * PI, 1, 0.5, 20);

}

function draw(){
  //background(250);
 orbitControl();
// var i = frameCount*10;
// particle(i,50,100,1); 



// for(var i=-400;i<400;i=i+35){
//   for(var j=-400;j<400;j=j+35){
//   particle(j,150,i,1);}
// }

// for(var i=0;i<400;i=i+50){
//   for(var j=0;j<400;j=j+35){
//   particle(j,115,i,1);}
// }

// for(var i=0;i<200;i=i+50){
//   for(var j=0;j<400;j=j+35){
//   particle(j,85,i,1);}
// }

// for(var i=0;i<200;i=i+50){
//   for(var j=0;j<400;j=j+35){
//   particle(j,50,i,1);}
// }

 //if((millis())-preMillis>=interval){
 
//   for(var i=-400;i<400;i=i+30){
// for(var j=0;j<400;j=j+35){
// particle(i,k,j,1);}
  
   
// if(k>-100){
// var w = -200
//     for(var i=-400;i<400;i=i+35){
// for(var j=0;j<400;j=j+35){
//   for(var k=150;k>w;k=k-30){
// particle(i,k,j,1);}
  
// }
//   } 
checkForShake();
   
// }k=k-20;
 //console.log(k)
 
}

function particle(x,y,z,s){
  
  push();
  translate(x+random(-0.5,0.5),y+2*random(-s,s),z+random(-0.5,0.5));
  colorMode(RGB)
  ambientLight(random(25,35));
  ambientMaterial(41,130,random(130,160),180);
  box(20,20,20);
  pop();
}

function checkForShake() {
  // Calculate total change in accelerationX and accelerationY
  accChangeX = abs(accelerationX - pAccelerationX);
  accChangeY = abs(accelerationY - pAccelerationY);
  accChangeT = accChangeX + accChangeY;
  // If shake
  if (accChangeT >= threshold) {
   var w = -200
    }
  // If not shake
  else {
    var w = -0;
 
}
 for(var i=-400;i<400;i=i+35){
for(var j=0;j<400;j=j+35){
  for(var k=150;k>w;k=k-30){
particle(i,k,j,1);}
  }
      }
}
