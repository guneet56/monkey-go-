
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score = 0;
var ground


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,300);
  
 monkey = createSprite(50,250,400,20);
monkey.addAnimation("running",monkey_running);
 monkey.scale = 0.1;
  
  ground = createSprite(300,290,550,5);
  ground.velocityX = -4;
  ground.shapeColour = "red";
 ground.x = ground.width/2;
  console.log(ground.x);
 // ground.visible= false;
}


function draw() {
 background("white"); 
  
if (ground.x< 300){
 ground.x = ground.width/2;
  
}
  
 if (keyDown("space")){
   monkey.velocityY=-9;
 }
  
  monkey.velocityY = monkey.velocityY+0.5;
  
  monkey.collide (ground);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score: " + score, 500,500);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Suvival time: " + survivalTime, 100,50);
    
food();
  obstacles();
drawSprites();
}
function food() {
   if (frameCount%80===0) {
    banana= createSprite (360,120,10,10);  
    banana.addImage ("bananaimage", bananaImage);
    banana.y = Math.round(random(80, 150));
    banana.scale= 0.1  ;
    banana.velocityX= -3;
    
    //adding lifetime to bananas
      banana.lifetime= 150;
   }
}

function obstacles() {
      if (frameCount % 300 === 0) {
    var obstacle = createSprite(600,260);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -3;
    
}
}    



