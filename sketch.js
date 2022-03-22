function setup() {
  angleMode(DEGREES);
}


function Hr(){
  let h = hour();
  strokeWeight(6);
  noFill();
  stroke(255,192,203);
  let end = map(h%12, 0, 12, 0, 360);
  let radius = min(width*4/5, height*4/5);
  arc(0,0,radius,radius,0,end);
  push();
  rotate(end);
  line(0,0,radius/5,0);
  pop();
}

function Min(){
  let mn = minute();
  strokeWeight(6);
  noFill();
  stroke(0,255,0);
  let end = map(mn, 0, 60, 0, 360);
  let radius = min(width*4/5, height*4/5);
  arc(0,0,radius - 20,radius - 20,0,end);
  push();
  rotate(end);
  line(0,0,radius/4,0);
  pop();
}

function Sec(){
  let sec = second();
  strokeWeight(6);
  noFill();
  stroke(255,255,0);
  let end = map(sec, 0, 60, 0, 360);
  let radius = min(width*4/5, height*4/5);
  arc(0,0,radius - 40,radius - 40,0,end);
  push();
  rotate(end);
  line(0,0,radius/3,0);
  pop();
}

function draw() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  translate(width/2,height/2);
  rotate(-90);
  Hr();
  Min();
  Sec();
  stroke(100);
  strokeWeight(8);
  point(0, 0);
}
