var movingBall, stillBall;

function setup() {
  createCanvas(800,400);
  movingBall = createSprite(200, 400, 50, 50);
  stillBall = createSprite(200, 200, 50, 50);

  movingBall.velocityY = -4;
  stillBall.velocityY = 4;

  movingBall.shapeColor = "blue";
  stillBall.shapeColor = "green";
}

function draw() {
  background(0);

  var distanceBetweenRight = movingBall.x - stillBall.x;
  var distanceBetweenLeft = stillBall.x - movingBall.x;
  var maxDistanceX = (movingBall.width + stillBall.width)/2

  var distanceBetweenTop = movingBall.y - stillBall.y;
  var distanceBetweenBottom = stillBall.y - movingBall.y;
  var maxDistanceY = (movingBall.height + stillBall.height)/2

  if(distanceBetweenRight < maxDistanceX && distanceBetweenLeft < maxDistanceX){
    movingBall.velocityX *= -1;
    stillBall.velocityX *= -1;
    movingBall.shapeColor = "red";
    stillBall.shapeColor = "red";
  }else{
    movingBall.shapeColor = "blue";
    stillBall.shapeColor = "green";
  }

  if(distanceBetweenTop < maxDistanceY && distanceBetweenBottom < maxDistanceY){
    movingBall.velocityY *= -1;
    stillBall.velocityY *= -1;
    movingBall.shapeColor = "red";
    stillBall.shapeColor = "red";
  }else{
    movingBall.shapeColor = "blue";
    stillBall.shapeColor = "green";
  }
  
  drawSprites();
}