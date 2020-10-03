const Bodies = Matter.Bodies
const Engine = Matter.Engine
const World = Matter.World
var engine, world;
var box1;
var ground;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  box1 = new Box(200,300,50,50);
  box2 = new Box(220,100,50,50);
  ground = new Ground(200,380,400,20);

}

function draw() {
  background(0); 
  Engine.update(engine);
box1.display();
ground.display();
box2.display();
 
}