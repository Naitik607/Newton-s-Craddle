
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

var bob1;
var bob2;
var bob3;
var bob4;
var bob5;

var sling1;
var sling2;
var sling3;
var sling4;
var sling5;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth/2, windowHeight/1.5);


	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
		mouse : canvasmouse
	};
	mConstraint = MouseConstraint.create(engine,options);
	World.add(world,mConstraint);

	//Create the Bodies Here.
	bob1 = new Bob(width/2,height/2);
	bob2 = new Bob(bob1.x-60,height/2);
	bob3 = new Bob(bob2.x-60,height/2);
	bob4 = new Bob(bob1.x+60,height/2);
	bob5 = new Bob(bob4.x+60,height/2);


	sling1 = new Sling(bob1.body,{x:bob1.x,y:bob1.y-50});
	sling2 = new Sling(bob2.body,{x:bob2.x,y:bob2.y-50});
	sling3 = new Sling(bob3.body,{x:bob3.x,y:bob3.y-50});
	sling4 = new Sling(bob4.body,{x:bob4.x,y:bob4.y-50});
	sling5 = new Sling(bob5.body,{x:bob5.x,y:bob5.y-50});

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  // displaying bodies here
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
  
	sling1.display();
	sling2.display();
	sling3.display();
	sling4.display();
	sling5.display();


  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(bob3.body,{x:mouseX,y:mouseY});
}

