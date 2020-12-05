var car, wall;
var wt, speed;
var deformation;

function setup() {
  createCanvas(800,400);
  wt = random(400,1500);
  speed = random(55,90);

  car = createSprite(50,200,50,50);
  car.shapeColor = color(255);
  car.velocityX = speed-30;

  wall = createSprite(600, 200, 20, 100);
  wall.shapeColor = color(80,80,80);
  
}

function draw() {
  background(0);  
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX = 0;
    deformation = (0.5*wt*speed*speed)/22500;
    if(deformation > 180)
    {
      car.shapeColor = color(255,0,0);
    }
    if(deformation < 180 && deformation > 100)
    {
      car.shapeColor = color(230,230,0);
    }
    if(deformation < 100)
    {
      car.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}