var play = 1
var end = 0 
var gamestate=play
var ground
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var obstacleGroup
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}



function setup() {
  createCanvas(500,500)
  monkey = createSprite(50,450,20,20)
  monkey.addAnimation("abc",monkey_running)
  monkey.scale = 0.1
  ground = createSprite(250,475,1050,50)
  foodGroup = new Group()
  obstacleGroup = new Group()
}


function draw() {
background("white")
drawSprites()
  monkey.collide(ground)
  if (gamestate===play){
    
  

ground.velocityX = -4
  
  if(ground.x<0){
    ground.x=ground.width/2
    
  }
  
bananas()
obstacles()
if (monkey.isTouching(obstacleGroup)){
    gamestate=end  

}
  }
  else if (gamestate===end){
    foodGroup.setVelocityXEach(0)
    obstacleGroup.setVelocityXEach(0)
    ground.velocityX = 0
  }
}
function bananas(){
if(frameCount%60===0){
banana = createSprite(500,50,20,20)
banana.velocityX = -4
banana.addImage(bananaImage)
banana.scale =  0.1
banana.y = Math.round(random(50,250))
foodGroup.add(banana)

  
}
}
function obstacles(){
if(frameCount%60===0){
obstacle = createSprite(500,405,20,20)
obstacle.velocityX = -4
obstacle.addImage(obstacleImage)
obstacle.scale =random (0.1,0.4)
obstacleGroup.add(obstacle)

  
}
}





