var  bg ,bgimg;
var cat,catimg1, catimg2;
var mouse,mouseimg1, mouseimg2;

function preload() {
    //load the images here
bgimg=loadImage("garden.png");
catimg1=loadAnimation("cat1.png")
catimg2=loadAnimation("cat2.png")
catimg3=loadAnimation("cat3.png")
catimg4=loadAnimation("cat4.png")

mouseimg1=loadAnimation("mouse1.png")
mouseimg2=loadAnimation("mouse2.png")
mouseimg3=loadAnimation("mouse3.png")





}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
bg=createSprite(500,400)
bg.addImage("bg",bgimg);

cat = createSprite(870,600,);
cat.addAnimation("cat",catimg1)
cat.scale=0.2

mouse=createSprite(150,600,);
mouse.addAnimation("mouse",mouseimg1);
mouse.scale=0.1
}

function draw() {

    background("bg");
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2){
cat.addAnimation("cathappy",catimg4)
cat.changeAnimation("cathappy")
cat.velocityX=0

mouse.addAnimation("mousehappy",mouseimg2)
mouse.changeAnimation("mousehappy")
}


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW)
{
mouse.addAnimation("mouseteasing",mouseimg3)
    mouse.changeAnimation("mouseteasing")
    mouse.famedelay=25
    cat.addAnimation("catrunning",catimg2)
cat.changeAnimation("catrunning")
cat.famedelay=25
cat.velocityX=-2
}






}
