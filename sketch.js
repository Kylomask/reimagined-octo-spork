
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground =new Ground(400,690,800,20);
	ground1 =new Ground(500,650,20,100);
	ground2 =new Ground(600,650,20,100);
	var ball_options = {
		isStatic:false,
		restitution:0.5,
		friction:10000000,
		density:1.2
	}

	//Create the Bodies Here.
	ball = Bodies.rectangle(400,350,40,40,ball_options);

	Engine.run(engine);
    World.add(world,ball);

	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  rectMode(CENTER);
  background(0);
  	if (keyDown("up")){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.03,y:-1})
	}
  ellipse(ball.position.x,ball.position.y,20,20)
  ground.show();
  ground1.show();
  ground2.show();
  drawSprites();
 
}


