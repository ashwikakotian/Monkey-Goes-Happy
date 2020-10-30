var survivalTime=0
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground
var score
var survivalTime
var PLAY=1
var END=0
var gameState=PLAY


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(400,400)

  monkey=createSprite(80,315,10,10)
  monkey.addAnimation("moving",  monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(200,385,10000,10)
  ground.velocityX = -4;
  ground.lifetime = 300;
  ground.x = ground.width /2;
  
  obstacleGroup=createGroup()
  FoodGroup=createGroup()
}

function draw(){
background("white")
 
  if (gameState===PLAY){
  if (ground.x < 0){
    ground.x = ground.width/2;
      
    }
  if (frameCount % 80 === 0){
   var obstacle = createSprite(400,365,10,40);
   obstacle.velocityX = -4;
  obstacle.lifetime = 300;
    obstacle.addImage(obstaceImage)
    obstacle.scale=0.1 
    obstacleGroup.add(obstacle);
  }
  

  
  if(keyDown("space")&& monkey.y >= 300) {
       monkey.velocityY = -13;
  } 
  monkey.velocityY = monkey.velocityY + 0.8
 monkey.collide(ground);
   food ()
    if(monkey.isTouching(obstacleGroup)){
      gameState=END
      monkey.destroy()
     
      
     
      
    }
    stroke("white")
  textSize(20)
  fill("white")
  text("score;"+score,500,50)
  
   
  stroke("black")
  textSize(20)
  fill("black")
    survivalTime=Math.round(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50)
  }


else if(gameState===END){
  ground.velocityX = 0;
  obstacleGroup.destroyEach()
   FoodGroup.destroyEach()
   survivalTime.visible=false
  
  
 }
  
  
  //celi
  
  
  
 
  drawSprites ()
}

function food (){
  
  if (frameCount % 80 === 0){
   var food = createSprite(350,255,10,40);
    food.velocityX=-4
   food.lifetime = 300;
    food.addImage( bananaImage)
    food.scale=0.1
    FoodGroup.add(food)
  }
}





