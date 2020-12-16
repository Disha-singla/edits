const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1
var particles=[]
var plinkos=[]
var divisions=[]
var divisionHeight=300;

function setup() {
  createCanvas(480,630)
    engine = Engine.create();
    world = engine.world;
  ground1=new Ground(240,610,480,15)

  for (var k=0;k<=width;k=k+80){
    divisions.push(new Divisions(k,465,10,divisionHeight))
  }

  for(var j=40;j<=width;j=j+50){
    plinkos.push(new plinko(j,75))
  }

  for (var j=15;j<=width-10;j=j+50){
    plinkos.push(new plinko(j,175))
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10,10,10)))
  }
}

function draw() {
  background(0);  
  Engine.update(engine);

  ground1.display()
  for (var k=0;k<=width;k=k+80){
    divisions[k].display()
  }
  
  for (var j=15;j<=width-10;j=j+50){
    plinkos[j].display()

    if(frameCount%60===0){
      particles.display()
    }
}
}