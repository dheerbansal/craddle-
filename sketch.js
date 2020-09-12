var ball1,ball2, ball3,ball4,ball5, ground,rope,rope1,rope2,rope3,rope4
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
	ball1 = new Bob(500,300,60);
	ball2 = new Bob(580,300,60);
	ball3 = new Bob(680,300,60);
	ball4 = new Bob(780,300,60);
  ball5 = new Bob(880,300,60);
  
  //making the ground using ground clas
  ground = new Ground(700,200,700,25);

  rope = new Rope(500,300,ball1.body);
  rope1 = new Rope(580,300,ball2.body)
  rope2 = new Rope(680,300,ball3.body);
  rope3 = new Rope(780,300,ball4.body);
  rope4 = new Rope(880,300,ball5.body);

   //line(ball1.x,ball1.y,ground.x,ground.y)


  var render = Render.create({
		element:document.body,
		engine: engine,
		options:{
			width:1200,
			height:700,
			wireframes:false
		}
  });
  
 // line(ball1.body.position.x,ball1.body.position.y,ground.body.position.x,ground.body.position.y)
  //creating rope using rope class
 // rope1 = new Rope(ball1.body,ground.body,-ball1.radius*2,0);

	Engine.run(engine)
  
  }


function draw() {
  rectMode(CENTER);
  background(255);

  
 
  //displaying the objects
  ball1.display();
 // rope1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ground.display();
  line(ball1.body.position.x,ball1.body.position.y,500,200)
  line(ball2.body.position.x,ball2.body.position.y,580,200)
  line(ball3.body.position.x,ball3.body.position.y,680,200)
  line(ball4.body.position.x,ball4.body.position.y,780,200)
  line(ball5.body.position.x,ball5.body.position.y,880,200)


 // line(ball2.body.position.x,ball2.body.position.y,ground.body.position.x,ground.body.position.y)
  //line(ball3.body.position.x,ball3.body.position.y,ground.body.position.x,ground.body.position.y)
  //line(ball4.body.position.x,ball4.body.position.y,ground.body.position.x,ground.body.position.y)
  //line(ball5.body.position.x,ball5.body.position.y,ground.body.position.x,ground.body.position.y)

  //line(ball1.x,ball1.y,ground.x,ground.y)
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




function keyPressed(){
	if(keyCode=== UP_ARROW){
	  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-160,y:-160});
	}
  }




