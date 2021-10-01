var cat , mouse;
var telaDoFundo , catimg1 , catimg2 , catimg3 , catimg4 , catimgfinal , mouseimg1 , mouseimg2 , mouseimg3 , mouseimg4;
var ultimaImagemGato;



function preload() {
    //load the images here
    catimg1 = loadImage("cat1.png");
    catimg2 = loadImage("cat2.png");
    catimg3 = loadImage("cat3.png");
    ultimaImagemGato = loadImage("cat4.png");
    catimgfinal = loadImage("cat4.png");
    telaDoFundo = loadImage("garden.png");
    mouseimg1 = loadImage("mouse1.png");
    mouseimg2 = loadImage("mouse2.png");
    mouseimg3 = loadImage("mouse3.png");
    mouseimg4 = loadImage("mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat.addImage("Gparado", catimg1);

}

function draw() {
    background("telaDoFundo");

    mouse = createSprite(250,300,50,50);
    cat = createSprite(900,300,50,50);

    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX=0;
        cat.addImage("ultimaImagemGato", catimg4);
        cat.ChangeAnimation("ultimaImagemGato");
        cat.x = 300;
        cat.scale = 0.2;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        cat.addImage("Gcaminhando1", catimg2);
        cat.addImage("Gcaminhando2", catimg3);
        mouse.addAnimation("Rprovocando", mouseimg2);
        mouse.ChangeAnimation("Rprovocando");
        mouse.freameDelay = 25;

    }


}
