var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
box1 = createSprite (100,500,100,20)
box1.shapeColor ="blue";
box2 = createSprite (220,500,100,20)
box2.shapeColor = "orange";
box3  = createSprite (340,500,100,20)
box3.shapeColor = "red";
box4  = createSprite (460,500,100,20)
box4.shapeColor = "green"
ball =  createSprite (random(20,550),200,20,20)
ball.shapeColor = "white";
ball.velocityX = -5;
ball.velocityY = -5;


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
   edges =  createEdgeSprites ();
   ball.bounceOff (edges);
   if(box1.isTouching(ball))
    { ball.bounceOff(box1) 
        ball.shapeColor="blue"; }
         if(box2.isTouching(ball)) 
         { ball.bounceOff(box2)
             ball.shapeColor="orange"; } 
             if(box3.isTouching(ball)) 
             { ball.bounceOff(box3) 
                ball.shapeColor="red"; } 
                if(box4.isTouching(ball)) 
                { ball.bounceOff(box4)
                     ball.shapeColor="green"; }




    drawSprites ();


    //add condition to check if box touching surface and make it box
}
