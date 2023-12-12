let cx, cy;
let cyspeed = 0;
let cgravity = 0.8;
let score = 0;
let start = 0;
let speed = 7;


function preload() {
  scooter = loadImage('Scooter.png')
  trash1 = loadImage('Trash.png');
  backg = loadImage('Background.png');
}

function setup() {
  imageMode(CENTER);
  rectMode(CENTER);
  textAlign(CENTER);
  createCanvas(800*1.6, 400*1.7);
  canvas.parent = ('sketch-holder');
  cx = 100*1.6;
  cy = 215*1.6;
  g1 = new trash(random(width,3*width),225*1.6);
  g2 = new trash(random(width,3*width),225*1.6);
}

function trash(x,y){
  this.x = x;
  this.y = y;
  this.display = function(){
   image(trash1,this.x, this.y,120*1.6,100*1.6);
   if(score>10&&score<20) {speed=9;} else if(score>20) {speed=12;}
   if(cx >= this.x-(30*1.6) && cx <= this.x+(50*1.6) && cy >= this.y-(50*1.6) )
      {noLoop(); 
      start = 3;}
  }
  this.update = function(){
    if(this.x>-30){
      this.x=this.x-speed;
    }
    else if(this.x<-30){
      this.x = random(width,3*width);
      score = score + 1
    }}}

function draw() {
  background(0);
  image(backg, 400*1.6, 200*1.6, width, height);
  if (start === 1) {
  g1.display();
  g1.update();
  g2.display();
  g2.update();
   if(abs(g2.x-g1.x)<300) 
   {g2.x = random(width,3*width)}
  }
  
  if (start === 0) {

  text('Click screen to begin.',width/2,height/2.3)
  text('Space to Jump.',width/2,height/1.9)}
  if (start === 3) {
  text(score, width/2,height/1.9);
  text('Your score!',width/2,height/2.3)}
  text('Reload page to restart.',width/2,height/1.1)
  image(scooter, cx, cy, 200*1.6, 215*1.5);
  fill(255);
  textSize(30);
  text(score, 30*1.6, 40*1.6);
  bounce();
}

function bounce() {
  cy = cy - cyspeed;
  cyspeed = cyspeed - cgravity

  if (cy > 214*1.6) {
    cyspeed = 0
  }
}

function mousePressed() {
  start = 1;
}

function keyPressed() {
  if (keyCode === 32 && cy >= 214*1.6)
  {
    cy = 214*1.6;
    cyspeed = 20;
  }
}