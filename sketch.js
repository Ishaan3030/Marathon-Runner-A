
var waitimg
var play,about,playimg,howimg,back,backimg,reset,resetimg,home
var gameState="wait"
var bgimg, popup,popupimg
var canvas, player2img, runner, runner2
var obstaclesGroup, obstacle1, obstacle2, obstacle3
var invisibleGround
var score=0

function preload(){
waitimg=loadImage("bg1.PNG")

bgimg= loadImage("logo.gif")
buttonimg=loadImage("button.png")
playimg=loadImage("Marathon.PNG")

popupimg = loadImage("Popup.png")
trackimg=loadImage("Track1.PNG")

player1img= loadImage("runner1.gif" )
player2img = loadImage("runner2.gif");
obstacle1 = loadImage("obstacle1.png");
obstacle2 = loadImage("obstacle2.png");
obstacle3 = loadImage("obstacle3.png");
}

function setup(){
createCanvas(windowWidth-20,windowHeight-20)


play=createImg("play1.png")
play.position(width/2,height-190)
play.size(200,200)

home=createImg("home.png")
home.position(0,0)
home.size(200,200)
home.hide();

about=createImg("how1.png")
about.position((width/2)-200,height-190)
about.size(200,200)
about.hide()

track=createSprite(width/2,height/2,width,height)
track.addImage(trackimg)
track.scale=6.01
track.visible=false

runner=createSprite(150, height/2-250,500,500)
runner.addImage(player1img)
runner.visible = false;
runner.scale=2.15



runner2=createSprite(150,height/2+85)
runner2.addImage(player2img);
runner2.visible = false;
runner2.scale=2

invisibleGround = createSprite(width/2, height/2+170, width, height-500);
invisibleGround.visible= false;

obstaclesGroup = new Group();

/*back=createImg("buttonplain.png")
back.position(play.x+200,height-200)
back.size(200,200)*/

/*reset=createImg("Reset.png")
reset.position(100,700)*/

logo=createSprite(windowWidth/2,windowHeight/2.75)
logo.addImage(bgimg)
logo.scale=2.5


popup=createSprite(width/2,height/2)
popup.addImage(popupimg)
popup.scale=7.5
popup.visible=false


}

function draw(){
background(180)
    if(gameState==="wait"){
background(waitimg)
play.show()
    about.show()
    logo.visible=true
    home.hide()
    popup.visible=false
    track.visible=false

    runner.visible = false;
    runner2.visible = false;

    obstaclesGroup.destroyEach();

}


play.mousePressed(()=>{
    gameState="playstate"
    background(180)
    
})

if(gameState==="playstate"){
    play.hide()
    about.hide()
    logo.visible=false
    home.show()
    popup.visible=false
    track.visible=true

    runner.visible = true;
    runner2.visible = true;

    track.velocityX= -15
    if(track.x<=width/4){
        track.x=width/2

        score = score + Math.round(getFrameRate()/60);
    }

    if(keyDown("space") && runner.y >= 0) {
        runner.velocityY = -20;
      }
    
      runner.velocityY = runner.velocityY + 0.8

      runner.collide(invisibleGround)
    spawnObstacles()

    if(obstaclesGroup.isTouching(runner)){
       gameState  = "end"
    }

}else if (gameState === "end"){
    obstaclesGroup.setVelocityXEach(0);
    obstaclesGroup.setLifetimeEach(-1);
    track.velocityX = 0;
    runner.collide(invisibleGround)
    runner.velocityX  =0;
}

home.mousePressed(()=>{
    gameState="wait"
})


about.mousePressed(()=>{
    gameState="howstate"
 
})

if(gameState==="howstate"){
  
    popup.visible=true

}

drawSprites()
if(gameState!=="wait"){
    textSize(25)
    fill("red")
    text("Score: "+ score, width-width/4,50);
}
}

function spawnObstacles() {
    if(frameCount % 60 === 0) {
      var obstacle = createSprite(width,height/2);
      //obstacle.debug = true;
      obstacle.velocityX = -10;
      var r=Math.round(random(height/3.95,height-210))
      obstacle.y=r
      
      //generate random obstacles
      var rand = Math.round(random(1,3));
      switch(rand) {
        case 1: obstacle.addImage(obstacle1);
                break;
        case 2: obstacle.addImage(obstacle2);
                break;
        case 3: obstacle.addImage(obstacle3);
                break;
        default: break;
      }
      
      //assign scale and lifetime to the obstacle           
      obstacle.scale = 0.5;
      obstacle.lifetime = 400;
      //add each obstacle to the group
      obstaclesGroup.add(obstacle);
    }
  }

  