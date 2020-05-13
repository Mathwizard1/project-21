var bullet,wall,s,mg,lethal,type,play,thickness;

function setup() {
  createCanvas(1200,400);
  play=createSprite(canvas.width/2,390,50,30);
  play.shapeColor="blue";
  bullet = createSprite(100,200,30,20);
  bullet.shapeColor="maroon";
  bullet.setCollider("rectangle",0,0,30,20);
  thickness=20;
  wall=createSprite(1000,200,thickness,150);
  wall.shapeColor=color(80,80,80);
  wall.setCollider("rectangle",0,0,20,100);
}

function draw() {
  background("white");
  textSize(20);
  wall.setCollider("rectangle",0,0,thickness,100);
  text("again",play.x-22.5,play.y-20);
  if(mousePressedOver(play)&&bullet.velocityX==0){
    thickness=random(22,83);
    wall.width=thickness;
    wall.shapeColor="grey";
    bullet.x=100;
  if(bullet.collide(wall)==false&&wall.width==thickness){
    lethal =0.5*smg()/Math.pow(thickness,3);
  }
}
  if(bullet.collide(wall)){
    bullet.velocityX=0;
  if (lethal<10){wall.shapeColor="green";type="safe";}
  if (lethal>=10){wall.shapeColor="red";type="dangerous";}
  if(wall.x-wall.width/2-bullet.x<=0){bullet.x=wall.x-wall.width/2-15;}
  }
  if(bullet.velocityX==0){
  textSize(20);
  text("speed:"+Math.round(s)+"m/s,weight:"+Math.round(mg)+"g,grade:"+type,canvas.width/2,canvas.height*3/4);
  }
  
  drawSprites();

}


function smg(){
  s= random(223,321);
  mg = random(30,52);
  bullet.velocityX=s;
  return mg*Math.pow(s,2);
}