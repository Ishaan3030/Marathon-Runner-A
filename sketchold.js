
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

var background, bgImg;
var runner1, run1img, runner2, run2img;
var cone, cone1, cone2, cone3, cone4, cone5;
var keyCode;

function preload()
{
	bgImg = loadImage("track.jpg");
  run1img = loadImage("runner1.gif");
  run2img = loadImage("runner2.gif");
  cone = loadImage("cone.png");
  
}

function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    runner1 = createSprite(50, 200, 20, 20);
    runner1.addImage(run1img);

	runner2 = createSprite(50, 350, 20, 20);
  runner2.addImage(run2img);

  cone1 = createSprite(500, 100, 30, 30);
  cone1.addImage(cone);
  cone1.scale=0.1


  cone2 = createSprite(1000, 100, 30, 30);
  cone2.addImage(cone);
  cone2.scale=0.1

  cone3 = createSprite(1500, 100, 30, 30);
  cone3.addImage(cone);
  cone3.scale=0.1


  cone4 = createSprite(2000, 100, 30, 30);
  cone4.addImage(cone);
  cone4.scale=0.1

  


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImg);

  image(bgImg, 10, 0, width, height);

  if(keyDown ("p")){
    gameState = PLAY;
  }

  if(gameState === PLAY){
    if(keyCode = RIGHT_ARROW){
       runner1.velocityX = 3;
    }

    runner2.velocityX = 3;

    if(runner1.x = 1950){
      gameState = END;
    }

    if(gameState = END){
      textSize(20);
      text("YOU WIN", 700, 350);
    }
  }

  
  
  drawSprites();
 
}



