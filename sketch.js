var hr, mn,sc;
function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(0,0,0);  
  translate(200,200);
  rotate(-90)
  
  hr= hour();
  mn= minute();
  sc= second();

  var scAngle= map(sc,0,60,0,360);
  var hrAngle= map(hr%12,0,12,0,360);
  var mnAngle= map(mn,0,60,0,360);
 
  

  push();
  rotate(scAngle);
  stroke(0,255,0);
  strokeWeight(7);
line(0,0,100,0)
pop();

push();
rotate(mnAngle);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0)
pop();

push();
rotate(hrAngle);
stroke(0,0,255);
strokeWeight(7);
line(0,0,100,0)
pop();
noFill();
stroke(0,255,0)
strokeWeight(5)
arc(0,0,300,300,0, scAngle);
noFill();
stroke(255,0,0)
strokeWeight(3)
arc(0,0,280,280,0, mnAngle);
noFill();
stroke(0,0,255)
strokeWeight(2.5)
arc(0,0,260,260,0, hrAngle);


}
