const Engine = Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine;
var world;
var maxSnow=20;
var snow2=[];
function preload(){
bkImg=loadImage("snow3.jpg");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world=engine.world;

  if(frameCount%15000===0)
  {
for(var i=0; i<maxSnow;i++){
snow2.push(new Snow(random(0,800),random(0,400),100,100))

}

  }
}

function draw() {
  background(bkImg);
  Engine.update(engine);
  for(var i =0;i<maxSnow;i++)
  {
    snow2[i].display();
    snow2[i].updateY();
  }  
  
}