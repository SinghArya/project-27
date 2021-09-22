var roofObject,rope1,rope2,rope3,rope4,rope5,bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,bobDiameter;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world;

function setup() {
	createCanvas(1600, 700);
  rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roofObject = new Roof(width/2,height/4,width/7,20);
//World.add(world,roof);
bobDiameter=40;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
  /*
	bobObject1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobObject4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);*/

  bobObject1=new Bob(250,300,bobDiameter)
  bobObject2=new Bob(300,300,bobDiameter)
  bobObject3=new Bob(350,300,bobDiameter)
  bobObject4=new Bob(400,300,bobDiameter)
  bobObject5=new Bob(450,300,bobDiameter)
	
	
 
rope1 = new Rope(bobObject1.body,roofObject.body,-bobDiameter*2,0);
rope2 = new Rope(bobObject1.body,roofObject.body,-bobDiameter*1,0);
rope3 = new Rope(bobObject1.body,roofObject.body,0,0);
rope4 = new Rope(bobObject1.body,roofObject.body,bobDiameter*1,0);
rope5 = new Rope(bobObject1.body,roofObject.body,bobDiameter*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
   roofObject.display();
   bobObject1.display();
   bobObject2.display();
   bobObject3.display();
   bobObject4.display();
   bobObject5.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 
}



