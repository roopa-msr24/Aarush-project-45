const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;


function setup() {
  var canvas = createCanvas(1360,650);
  engine = Engine.create();
  world = engine.world;

  box1 = new box(700,320,70,70);
  box2 = new box(920,320,70,70);
 
}

function draw() {
  background(0);  
  Engine.update(engine)

  box1.display();
  box2.display();



  drawSprites();
}