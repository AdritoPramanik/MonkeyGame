var PLAY=1;
var END=0;
var gameState=1;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstaclesGroup;
var score;
var survivalTime;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 400);

  monkey=createSprite(200, 200, 20, 20);
  monkey.addAnimation("running", monkey_running);
  
  ground=createSprite(400, 350, 9000, 10);
    ground.velocityX=-4;
    ground.x=ground.width/2;
 
  survivalTime=0;
  score=0;
}


function draw() {
  
background("lightblue");
  
  monkey.collide(ground);
  
  if(gameState===PLAY) {
  
  monkey.scale=0.1;
    
    stroke("white");
    textSize(20);
    fill("white");
    text("Score:" +score, 500, 50);
    
    stroke("black");
    textSize(20);
    fill("black");
    survivalTime=Math.ceil(frameCount/getFrameRate());
    text("Survival Time:"+survivalTime, 100, 50);
     
    
  foodGroup=createGroup();
    obstaclesGroup=createGroup();
    
    Obstacles();
    food();
  
  
    if (ground.x<=0){
    ground.x=ground.width/2;
    }
  
  if (keyDown("space")) {
    monkey.velocityY=-12; 
     
  }
    monkey.velocityY=monkey.velocityY+0.8;
 } 
  
  drawSprites();
}
function Obstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(200, 327, 20, 20);
    obstacle.velocityX=-4;
    obstacle.addImage(obstacleImage);
    obstacle.lifeTime=100;
    obstacle.scale=0.1;
    obstaclesGroup.add(obstacle);
  }
}
function food(){
  if(frameCount%80===0){
    
    
   banana=createSprite(600,200, 20, 20);
  banana.y=Math.round(random(120, 200));
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.lifeTime=150;
  banana.velocityX=-4;
    foodGroup.add(banana);
  }
}






