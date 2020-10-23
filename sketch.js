var movingBall, stillBall;

function setup() {
  createCanvas(800,400);
  movingBall = createSprite(400, 200, 50, 50);
  stillBall = createSprite(400, 200, 50, 50);

  movingBall.shapeColor = "blue";
  stillBall.shapeColor = "green";
}

function draw() {
  background(0);
  movingBall.x = World.mouseX;
  movingBall.y = World.mouseY;

  var distanceBetweenRight = movingBall.x - stillBall.x;
  var distanceBetweenLeft = stillBall.x - movingBall.x;
  var maxDistanceX = (movingBall.width + stillBall.width)/2

  var distanceBetweenTop = movingBall.y - stillBall.y;
  var distanceBetweenBottom = stillBall.y - movingBall.y;
  var maxDistanceY = (movingBall.height + stillBall.height)/2

  if(distanceBetweenRight < maxDistanceX && distanceBetweenLeft < maxDistanceX && distanceBetweenTop < maxDistanceY && distanceBetweenBottom < maxDistanceY){
    movingBall.shapeColor = "red";
    stillBall.shapeColor = "red";
  }else{
    movingBall.shapeColor = "blue";
    stillBall.shapeColor = "green";
  }

  drawSprites();
}