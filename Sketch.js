var x = 0;
var y = 0;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  
  background(0);
  
}

function nextPoint(){
  var r = Math.random() * 1;

if( r < 0.01){
  //1
  stroke(0, 0, 255);
  var next_X = 0;
  var next_Y = 0.16 * y;

}else if(r < 0.86){
  //2
  stroke(0, 255, 0);
  next_X = 0.85 * x + 0.04 * y;
  next_Y = -0.04 * x + 0.85 * y + 1.6;
}else if(r < 0.93){
  //3
  stroke(255, 0, 0);
  next_X = 0.20 * x + -0.26 * y;
  next_Y = 0.23 * x + 0.22 * y + 1.6;

}else{
  //4
  stroke(255);
  next_X = -0.15 * x + 0.28 * y;
  next_Y = 0.26 * x + 0.24 * y + 0.44;
}
  x = next_X;
  y = next_Y;
//  console.log(x, y);
}

function drawPoint(){
  strokeWeight(4);
  var px = map(x, -2.1820, 2.6558, 0, width);
  var py = map(y, 0, 9.9983, height, 0);
  point(px, py);
}


function draw() {
  for (let index = 0; index < 1000; index++) {
    drawPoint();
    nextPoint();

  }


}
