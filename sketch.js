
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground1 = new Ground(200,200,1200,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgray");
  ground.display();
  drawSprites();
 
}



