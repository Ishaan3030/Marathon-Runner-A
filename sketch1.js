
var waitimg
var play,how,playimg,howimg,back,backimg,reset,resetimg,home
var gameState="wait"
var bgimg

function preload(){
waitimg=loadImage("bg1.png")

bgimg= loadImage("logo.gif")
buttonimg=loadImage("button.png")
 
trackimg=loadImage("track.PNG")

}

function setup(){
createCanvas(windowWidth-20,windowHeight-20)

play=createImg("play1.png")
play.position(width/2,height-190)
play.size(200,200)

home=createImg("home.png")
home.position(10,10)
home.size(200,200)
home.hide();

how=createImg("how1.png")
how.size(200,200)
how.position(play.x-200,height-190)


/*back=createImg("buttonplain.png")
back.position(play.x+200,height-200)
back.size(200,200)*/

/*reset=createImg("Reset.png")
reset.position(100,700)*/

logo=createSprite(windowWidth/2,windowHeight/2.75)
logo.addImage(bgimg)
logo.scale=2.5


track=createSprite(windowWidth*4,windowHeight/2,width*5,height)
track.addImage(trackimg)



}

function draw(){

    if(gameState==="wait"){
background(waitimg)
play.show()
    how.show()
    logo.visible=true
    home.hide()
}


play.mousePressed(()=>{
    gameState="playstate"
    background(0)
})

if(gameState==="playstate"){
    play.hide()
    how.hide()
    logo.visible=false
    home.show()
}

home.mousePressed(()=>{
    gameState="wait"
})




drawSprites()
}