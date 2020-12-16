const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var building1;
var ball1;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,height,1200,20);
    building1 = new Building(700,320,70,70);
    building2 = new Building(700,250,70,70);
    building3 = new Building(700,180,70,70);
    building4 = new Building(700,110,70,70);
    ball1 = new Ball(200,200,80,80);

    rope1 = new Rope(ball1.body,{x: 500,y: 50})
}

function draw (){
    background("red")
    Engine.update(engine);

   building1.display();
   building2.display();
   building3.display();
   building4.display();
   ball1.display();
   rope1.display();

}