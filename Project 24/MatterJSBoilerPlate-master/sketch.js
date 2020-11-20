
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	var dustbinOption={
		isStatic:true
	}

	ground=new Ground(600,660,1200,10);

	dustbin=new Dustbin (900,645,200,15,dustbinOption);
	dustbin1=new Dustbin (802,595,15,100,dustbinOption)
	dustbin2 =new Dustbin(998,595,15,100,dustbinOption);

	var ballOption={
		isStatic:false,
		restitution:0.3,
		friction:0.5,      
		density:1.2
	}

	ball=new Ball(100,0,35,35,ballOption);
  
	Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  
  dustbin.display();
  dustbin1.display();
  dustbin2.display();

  ball.display();
  ball.debug=true;
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:0.2,y:-0.2});
	   
	 }
   }