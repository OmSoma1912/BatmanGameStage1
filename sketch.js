const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var raindrop = [];

var umbrella,batman;
var maxDrops = 100;

function setup(){
    createCanvas(400,500);
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(100,400,60,60);
    batman = new Man(100,450,100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    umbrella.display();
    batman.display();
    
    if(frameCount%5===0){
        raindrop.push(new Raindrop(random(0,400), 10,20,20));
    }

    for(var i = 0; i < raindrop.length; i++){
        raindrop[i].display();
    } 
}   

