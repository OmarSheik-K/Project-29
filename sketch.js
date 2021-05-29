const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();

  stand1 = new Stand(390,300,250,10);
  //stand2 = new Stand(700,200,200,10); The stand for the second pyramid is there but none of the blocks are
 
  //level one
  block1 = new Block(300,275,30,40);
  //console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  polygon = Matter.Bodies.polygon(30, 200, 6, 40);
  World.add(world, polygon);

  slingShot = new slingshot(polygon, {x:50, y:200});


}

function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();

  slingShot.display();

  imageMode(CENTER);
  image(polygon_img, polygon.position.x, polygon.position.y,40,40);



  /*I tried using this to have the image rotate as well without using the function in the classes but
  there is a weird effect with it being offset depending on how far you are from 0,0(the top left corner)
  I'll just use the image by itself
  var angle = polygon.angle;
  var pos= polygon.position;
   push();
   translate(pos.x, pos.y);
   rotate(angle);
   imageMode(CENTER)
   image(polygon_img, pos.x-50, pos.y-200,40,40)
   pop();
 */
}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX, y: mouseY})
}

function mouseReleased(){
  slingShot.fly();
}