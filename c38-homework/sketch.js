var canvas;
var car,carimg;
var bombimg,track;
var score = 100;
var a;
var obstacleGroup;


function preload()
{
  carimg = loadImage("images/car3.png");
  bombimg = loadImage("images/bomb_png_file.png");
  track = loadImage("images/track.jpg");
  explosion = loadImage("images/explosionimg.png");
  obstacleGroup = createGroup();

}


function setup()
{
  canvas = createCanvas(displayWidth-40,displayHeight-40);
  car = createSprite(displayWidth/2,displayHeight/3,50,50);
  car.addImage("carimage",carimg);
}


function draw()
{
  background("white");

  camera.position.x = displayWidth/2;
  camera.position.y = car.y;
  
  if(keyDown(UP_ARROW))
  { 
    car.y = car.y - 5;
  }

  if(keyDown(LEFT_ARROW))
  {
    car.x = car.x - 5;
  }

  if(keyDown(RIGHT_ARROW))
  {
    car.x = car.x + 5;
  }

  image (track,0,-displayHeight*4,displayWidth,displayHeight*5);


  var o = createSprite(car.x - 20,car.y,20,20);
  a = displayHeight-10;
  var b = car.y - 300;
  spwanObsactles();
  drawSprites();
  textSize(50);
  fill ("red");
  text ("Score ="+score,displayWidth-500,b);


}

function spwanObsactles()
{
    if (frameCount % 60 === 0) 
    {
      var obstacle = createSprite(600,120);
      obstacle.x = Math.round(random(120,displayWidth-120));
      obstacle.y = car.y + 20;
      obstacle.addImage(bombimg);
      obstacle.scale = 0.1;
      obstacleGroup.add(obstacle);
      
       //assigning lifetime to the variable
      obstacle.lifetime = 1000;

      if(obstacle.isTouching(obstacleGroup))
      {
        obstacleGroup.changeImage(explosion);
        score = score -1;
      }
    }
  
}
