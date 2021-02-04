var bgimg
var treasurehunterimg
var treasurehunter
var enemyimg
var enemy1
var obstacle1
var obstacle2
var ground
function preload(){
 bgimg=loadImage("images/treasure background.jpg")
treasurehunterimg=loadAnimation("images/treasurehunter1.png","images/treasurehunter2.png","images/treasurehunter3.png")
enemyimg=loadImage("images/enemy.png")
obstacle1=loadImage("images/obstacle1.png")
obstacle2=loadImage("images/obstacle2.png")
}

function setup(){
    createCanvas(displayWidth-25,displayHeight-155)
  treasurehunter=createSprite(100,displayHeight-300)
  treasurehunter.addAnimation("running",treasurehunterimg)
  treasurehunter.scale=0.4
  ground=createSprite(displayWidth/2,displayHeight-200,displayWidth,10)
  ground.visible=true

}


function draw(){
  background(bgimg)
if(keyDown("space")&&(treasurehunter.y>displayHeight-330)){
  treasurehunter.velocityY=-18
}
treasurehunter.velocityY=treasurehunter.velocityY+0.5

enemy()
treasurehunter.collide(ground)

console.log(treasurehunter.y,displayHeight-300)

  drawSprites()
}

function enemy(){
if(World.frameCount%200===0){
enemy1=createSprite(displayWidth,displayHeight-300)
var rand=Math.round(random(1,3))
switch(rand){
  case 1:enemy1.addImage(enemyimg)
  break
  case 2:enemy1.addImage(obstacle1)
  enemy1.y=displayHeight-250
  break
  case 3:enemy1.addImage(obstacle2)
  enemy1.y=displayHeight-250
  break
}

enemy1.scale=0.4
enemy1.velocityX=-4
enemy1.lifetime=displayWidth/4
}

}