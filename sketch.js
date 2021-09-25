var starImg,bgImg,fairyImg;
var star, fairy, starBody;
var sound;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");

	sound = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800,600);

	//escribe el código para reproducir el sonido fairyVoice
	sound.loop();

	fairy = createSprite(100,450);
	fairy.addAnimation("hada",fairyImg);
	fairy.scale = 0.2;


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  fairy.velocityX = 0;

  keyPressed();

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //escribe aquí el código para detener la estrella en la mano del hada
  if (star.y > 420 && starBody.position.y > 420){
	  Matter.Body.setStatic(starBody,true);
  }


  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//escribe el código para mover al hada a la izquierda y derecha
	if (keyDown("LEFT_ARROW")){
		fairy.velocityX = -2;
	}

	if (keyDown("RIGHT_ARROW")){
		fairy.velocityX = 2;
	}
	
}
