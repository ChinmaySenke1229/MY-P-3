
var shuttle,shuttleImg;
var ufo,ufoImg;
var laser,laserImg;
var bg,bgImg;
var restart,restartImg;
var gameOver,gameOverImg;

var gameState="play";

function preload(){

  bgImg=loadImage("space.jpg");
  ufoImg=loadImage("uffo.png");
  shuttleImg=loadImage("shuttel.png");
  laserImg=loadImage("laser.png");
  //gameOverImg=loadImage("go.png");
 // restartImg=loadImage("restart.png");

}

function setup() {
  createCanvas(displayWidth,displayHeight);

  bg=createSprite(displayWidth/2,displayHeight/2);
  bg.addImage(bgImg);
  bg.velocityY=-2;

 
 
       
  shuttle=createSprite(600,displayHeight-125);
  shuttle.addImage(shuttleImg);
  shuttle.scale=0.7;
  
 laserGroup=new Group()
 ufoGroup=new Group()

}



function draw() {

  background(255,255,255);
  
  if(gameState==="play"){

    

  if(keyDown(LEFT_ARROW)){

    shuttle.x=shuttle.x-10;

  }

  if(keyDown(RIGHT_ARROW)){

    shuttle.x=shuttle.x+10;

  }

  if(bg.y<100){

    bg.y=displayHeight/2;

  }

  if(frameCount%300===0){

    bg.velocityY=bg.velocityY-1;

    }

  if(keyWentDown("space")){

    spawnBullet()

  }

  if(laserGroup.isTouching(ufoGroup)){

    laserGroup.destroyEach();
    ufoGroup.destroyEach();

  }
  
  spawnEnemy();

  drawSprites();

  if(ufoGroup.isTouching(shuttle)){

    gameState="end";

  }
}

if(gameState="end"){

  ufoGroup.destroyEach();
  laserGroup.destroyEach();

  shuttle.visible=false;
  bg.velocityY=0;
     
  
   
  

}

 
}

function spawnBullet(){
  
  laser=createSprite(shuttle.x,displayHeight-220);
  laser.addImage(laserImg);
  laser.scale=0.1;
  laser.velocityY=-2.5;
  laser.lifetime=500;
  laserGroup.add(laser);
  
}

function spawnEnemy(){

  if(frameCount%100===0){
    
    ufo=createSprite(random(50,displayWidth-100));
    ufo.addImage(ufoImg);
    ufo.velocityY=2.5;
    ufo.lifetime=500;
    ufo.scale=0.5;
    ufoGroup.add(ufo);

  }

}