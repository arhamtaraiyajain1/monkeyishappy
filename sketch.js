
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime=0;
var ground;

function preload(){
  
  
  monkey_running =        loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



 function setup() {
 createCanvas(600,600);
  
 ground = createSprite(600,300,600,15);
 ground.velocityX=-4;
   
 monkey=createSprite(80,275,20,20);
 monkey.addAnimation("moving",monkey_running);
 monkey.scale=0.1;
}


function draw() {
background("white");
  monkey.collide(ground);
 if(ground.x>0){
   ground.x=ground.width/2;
 } 
  
 if(keyDown("space")&&monkey.y>=100){
   monkey.velocityY=-13;
 }
  
  monkey.velocityY=monkey.velocityY+0.8;
  

  stroke("black");
  textSize(20);
  fill("black");
  text("survivalTime;"+survivalTime,400,100)
 
  if(frameCount%1===0){
    survivalTime=survivalTime+1
  }
  spawnObstacles();
  bananas();
 drawSprites(); 
}

function spawnObstacles(){
  
  if(frameCount%300===0){
   
    obstacles=createSprite(600,260,20,40);
    obstacles.addImage(obstacleImage);
    obstacles.velocityX=-3;
    obstacles.scale=0.2;
    obstacles.lifetime=700;
  }
  
}

function bananas(){
  
  if(frameCount%80===0){
   banana=createSprite(300,150,30,30);
  banana.addImage(bananaImage);
   banana.scale=0.1; 
    banana.velocityX=-4;
    banana.lifetime=700;
  }
  
}


