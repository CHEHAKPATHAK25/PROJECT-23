var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; 

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);

	fill(255,0,0);
	log1= this.body=Bodies.rectangle(380,550,100,20,{isStatic:true});
	log2= this.body=Bodies.rectangle(400,550,20,200,{isStatic:true});
	log3= this.body=Bodies.rectangle(420,550,100,20,({isStatic:true}));

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  log3.position.x= packageBody.position.x;
  log3.position.y= packageBody.position.y;
  log1.display();
  log2.display();
  log3.display();
  drawSprites();
}

function keyPressed() {
 if (keyPressed === DOWN_ARROW) {
	 Matter.Body.setStatic(packageBody,false);
	 packageBody.gravity=0.5;
	 packageBody.position.y = log3.position.y;
	 }
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
  }