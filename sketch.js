
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2, box3;
var paperObject;
var ground;
var paperAnimation;
var dustbinimage;
var dustbin;

function preload(){
	dustbinimage = loadImage("dustbingreen (1).png");
}
function setup() {
	createCanvas(1100, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Engine.run(engine);
	paperObject = new Paper(40, 545, 70);
	ground = new Ground(800, 550, 1600, 15);
	box1 = new Dustbin(800, 535, 100, 20);
	box2 = new Dustbin(740, 510, 20, 70);
	box3 = new Dustbin(860, 510, 20, 70);
	dustbin = createSprite(800, 430);
	dustbin.addImage(dustbinimage);
	dustbin.scale = 0.7;
}

function draw() {
  rectMode(CENTER);
  background("white");
  //Engine.update(engine);
  ground.display();
  paperObject.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x: 750, y:-1200});
	}
}


