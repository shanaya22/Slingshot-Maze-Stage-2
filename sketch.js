const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var log;
var pendulum;
var sling;
var ground;
var box1,box2,box3,box3,box4,bo5,box6;

function setup(){
  var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    log = new Log(300,250,120,10);
    pendulum = new Pendulum(100,100,20,20);

    sling = new Slingshot(pendulum.body,{x:100,y:250});

    ground = new Ground(200,400,400,20);

    box1 = new Box(270,235,30,30);
    box2 = new Box(300,235,30,30);
    box3 = new Box(330,235,30,30);
    box4 = new Box(285,205,30,30);
    box5 = new Box(315,205,30,30);
    box6 = new Box(300,175,30,30);
    box7 = new Box(270,375,30,30);
    box8 = new Box(300,375,30,30);
    box9 = new Box(330,375,30,30);
    box10 = new Box(285,345,30,30);
    box11 = new Box(315,345,30,30);
    box12 = new Box(300,315,30,30);

}



function draw(){
  background("grey");
  Engine.update(engine);

  strokeWeight(2);

  log.display();
  pendulum.display();
  sling.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
}

function mouseReleased(){
  sling.fly();
}

function mouseDragged(){
  Matter.Body.setPosition(pendulum.body,{x:mouseX,y:mouseY});
  
}