
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground;
var box1, box2, box3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	var ground_options = {
		isStatic: true
	}

	
	ball = new Ball(100, 400, 20);
	
	fill("yellow");
	ground = Bodies.rectangle(400, 690, 800, 20, ground_options);
	World.add(world, ground);

	box1 = new Dustbin(600, 650, 10, 70);
	box2 = new Dustbin(655, 680, 120, 10);
	box3 = new Dustbin(710, 650, 10, 70);

	Engine.run(engine);
	
}


function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 800, 20);
 
  box1.display();
  box2.display();
  box3.display();
  ball.display();

 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body, ball.body.position, {x:60, y:-60});
	}
}





