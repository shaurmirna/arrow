var bullet,wall;
var speed,weigh,tickness;
 



function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  tickness=random(22,83);

  bullet=createSprite(50, 200, 50, 10);
  wall=createSprite(1200, 200, tickness, height/2);
  wall.shapeColor=color(80,80,80);
  bullet.velocityX=speed;


  
  
}

function draw() {
  background(255,255,255);


  if (hascolided(bullet,wall)){

    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness *thickness *thickness);
    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }

  }
   
  drawSprites();
}

function hascolided(lbullet,lwall){
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;

}

