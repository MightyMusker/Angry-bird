const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;
var ball;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;
var backg;

function preload(){
  backg=loadImage("sprites/bg.png");

}


function setup() {
  engine=Engine.create();
  world=engine.world;
  createCanvas(1200,400);
  ground=new Ground();
 box1=new Box(700,370,70,70);
 box2=new Box(920,370,70,70);
pig1=new Pig(810,370);
log1=new Log(810,340,300,PI/2);

box3=new Box(700,325,70,70);
box4=new Box(920,325,70,70);
pig2=new Pig(810,330);
log2=new Log(810,290,300,PI/2);

box5=new Box(810,280,70,70);
log3=new Log(755,270,150,PI/7);
log4=new Log(865,270,150,-PI/7);

bird=new Bird(200,200,50,50);
}

function draw() {
background(backg);
Engine.update(engine);
ground.display();
box1.display();
box2.display();
pig1.display();
log1.display();
box3.display();
box4.display();
pig2.display();
log2.display();
box5.display();
log3.display();
log4.display();
bird.display();

}