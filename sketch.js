const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var backgroundimg;
var hero;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14;
var block15,block16,block17,block18,block19,block20;

function preload() {

  backgroundimg = loadImage("background.jpg");

}

function setup() {
  createCanvas(1400,700);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(400,450,800,20);
  hero = new Hero(250,400,160,160);
  monster = new Monster(700,440,100,100);

  fly = new Fly(hero.body,{x : 250,y : 200});

  block1 = new Block(450,440,40,40);
  block2 = new Block(450,400,40,40);
  block3 = new Block(450,360,40,40);
  block4 = new Block(450,320,40,40);
  block5 = new Block(450,280,40,40);
  block6 = new Block(450,240,40,40);
  block7 = new Block(500,440,40,40);
  block8 = new Block(500,400,40,40);
  block9 = new Block(500,360,40,40);
  block10 = new Block(500,320,40,40);
  block11 = new Block(550,440,40,40);
  block12 = new Block(550,400,40,40);
  block13 = new Block(550,360,40,40);
  block14 = new Block(550,320,40,40);
  block15 = new Block(550,280,40,40);
  block16 = new Block(550,240,40,40);
  block17 = new Block(600,200,40,40);
  block18 = new Block(600,160,40,40);
  block19 = new Block(600,440,40,40);
  block20 = new Block(600,400,40,40);

}

function draw() {
  background(backgroundimg);
  Engine.update(engine);

  ground.display();
  hero.display();
  fly.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  monster.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x : mouseX,y : mouseY});
}