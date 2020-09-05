var ball1,ball2, ball3,ball4,ball5, ground,rope1
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
const Render = Matter.Render



function setup() {
	createCanvas(1200, 800);
    engine = Engine.create();
	world = engine.world;
//making the ball's using Bob class
	ball1 = new Bob(300,500,60);
	ball2 = new Bob(358,600,60);
	ball3 = new Bob(416,600,60);
	ball4 = new Bob(474,600,60);
  ball5 = new Bob(532,600,60);
  
  //making the ground using ground clas
  ground = new Ground(700,150,700,25);

  var options= {
   bodyA:ball1.body,
   bodyB:ground.body,
   length: 400,
   stiffness:0.9
}
var constraint = Constraint.create(options);
  World.add(world,constraint)

  var render = Render.create({
		element:document.body,
		engine: engine,
		options:{
			width:1200,
			height:700,
			wireframes:false
		}
	});
  //creating rope using rope class
 // rope1 = new Rope(ball1.body,ground.body,-ball1.radius*2,0);

	Engine.run(engine)
  
  }


function draw() {
  rectMode(CENTER);
  background(255);

  
 
  //displaying the objects
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ground.display();
  //rope1.display();
 // drawSprites();

 
}



function drawLine(constraint){
  ballBodyPosition = constraint.bodyA.position
  groundBodyPosition = constraint.bodyB.position
  groundBodyOffset = constraint.pointB
  groundBodyX = groundBodyPosition.x + groundBodyOffset.x
  groundBodyY = groundBodyPosition.y + groundBodyOffset.y
  line(ballBodyPosition.x,ballBodyPosition.y,groundBodyX,groundBodyY);
}
function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}


function mouseReleased(){
  rope.fly();
}


