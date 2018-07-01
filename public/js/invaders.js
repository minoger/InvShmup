
let bombs = [];
let cannon;
let cannon_dir = 2;
let shots = [] ;
let counter_field;
let count_shots = 0;
let ships = [];
let dest_ships = 0;
let ship_xpos = [20,40,80,100,120,140,180,200,220,240,260,280,300,320,340,360,380,400,420,440,460,480,500,520,540,560,580,600,620,640,660,680,700,720];
let ship_ypos = [100,110,120,130,140,150,160,180,200,210,220,230,240,250,260,270,280];
let initial_ships = 50;
let ships_lost = 0;
let img;
let failures = [];
let max_failures = 10;
let game_over = 0;

let bomb_hits = 0;

function preload() {
  soundFormats('ogg', 'mp3');
  song1 = loadSound("media/3543.mp3");
  song2 = loadSound("media/Explosion.mp3");
  song3 = loadSound("media/Monster.mp3");
}


function setup() {
  bg = loadImage("media/globe.png");
  ship_img = loadImage("media/spaceship.png");
  cannon_img = loadImage("media/cannon.png");
  star_img = loadImage("media/yellow_star.png");
  myCanvas = createCanvas(800, 600);
  myCanvas.parent(myCanvasContainer);
  frameRate(30);
  counter_field = new Counter();
  cannon = new Cannon(width/2,height-50);
  for (let i = 0;i < initial_ships; i++) {
   ships[i] = new Ship(ship_xpos[int(random(0,ship_xpos.length-1))],ship_ypos[int(random(0,ship_ypos.length-1))]);
  }
  for (let i =0; i < max_failures; i++) {
     failures[i] = new Failure(width-17,height-15-i*17,15,15,0,255,0);
  } 

}

function draw() {
  
  //if "game_over" equals true ... stop the loop ..an so stop the game
  if (game_over) {
     createElement('H2','GAME OVER - Press Strg+R to reload');
     song3.play();
     noLoop();
  }


  //the game starts here
  background(bg);
  cannon.show(0);
  cannon.move(cannon_dir);
  
  //create the failure counter at the right side of the screen

  for (let i=0; i < max_failures;i++) {

  	failures[i].show();
  }

  //text to info field
  fill(200,200,200);
  textSize(12);
  text("ships destroyed",0,10)
  text(dest_ships,90,10);
  text("ships",0,20);
  text(ships.length,90,20);
  text("shots",0,30);
  text(count_shots,90,30);
  text("ships lost",0,40);
  text(ships_lost,90,40);
  textSize(40);
  text("!!!!!   INVADERS   !!!!!!",220,40);
  text(bomb_hits,0,60);
  stroke(255,0,0);
  line(0,50, width, 50);
  stroke(255,0,0);
  line(20,height-50, width-20, height-50);
  
  //show, move, shot the ships from the array
  for (let i = 0; i < ships.length;i++) {
    ships[i].display();
    for (let j = 0; j < shots.length; j++) {
       if (ships.length > 0 ) {
          //check if the shot hits the ship - if yes --> destroy the ship (make it small) and destroy the shot
          if ((ships[i].y === shots[j].y && ships[i].x === shots[j].x) || (ships[i].y === shots[j].y && ships[i].x+10 === shots[j].x) || (ships[i].y === shots[j].y && ships[i].x+20 === shots[j].x)) {
             dest_ships++;
 //            ships[i].destroy();
	     ships.splice(i,1);
	     song2.play();	
             shots.splice(j,1);
             nship = new Ship(ship_xpos[int(random(0,ship_xpos.length-1))],ship_ypos[int(random(0,ship_ypos.length-1))]);
             ships.push(nship);
             for (let all = 0; all < ships.length ; all++) {
                ships[all].move();
	        }
	    
          } 
       }
    }	  
  }  
    
    
for (let all = 0; all < ships.length ; all++) {
   if (ships[all].y === height-50) {
      ships_lost++;
 //   ships[all].destroy();
      ships.splice(all,1);
      //sometimes ..only sometimes : - ) create a new ship
      if (round(random(0,3))) {
         nship = new Ship(ship_xpos[int(random(0,ship_xpos.length-1))],ship_ypos[int(random(0,ship_ypos.length-1))]);
	 ships.push(nship);
      }
   }
}


//update the counter on the right side of the screen
if (ships_lost > 10) {
   failures[0].update(255,0,0);
}
if (ships_lost > 20) {
   failures[1].update(255,0,0);
} 
if (ships_lost > 30) {
   failures[2].update(255,0,0);
}
if (ships_lost > 40) {
   failures[3].update(255,0,0);
}
if (ships_lost > 50) {
   failures[4].update(255,0,0);
}
if (ships_lost > 60) {
   failures[5].update(255,0,0);
}
if (ships_lost > 70) {
   failures[6].update(255,0,0);
   }
if (ships_lost > 80) {
   failures[7].update(255,0,0);
   }
   if (ships_lost > 90) {
   failures[8].update(255,0,0);
   }
   if (ships_lost > 100) {
   failures[9].update(255,0,0);
   game_over = 1;
}


//so .. let create some bombs from the invaderrs

for (let i = 0; i < ships.length; i++) {
	if(round(random(0,1000)) === 1 ) {
		let bomb = new Bomb(ships[i].x,ships[i].y);
		bombs.push(bomb);
       }
}

//display the bombs
for (let i = 0; i < bombs.length; i++) {
	bombs[i].display();
}

//move the bombs
for (let i = 0; i < bombs.length; i++) {
	bombs[i].move();
	if (bombs[i].y === height-10) {
		bombs[i].destroy();
		bombs.splice(i,1);
	}
}

//count up if the bomb hit the cannon

for (let i = 0; i < bombs.length; i++ ) {
	if ( (bombs[i].y === cannon.y && bombs[i].x === cannon.x) || (bombs[i].y === cannon.y && bombs[i].x  === cannon.x + 20)|| (bombs[i].y === cannon.y && bombs[i].x  === cannon.x + 40) ) {
		console.log(bombs[i].x);
		bomb_hits++;
		cannon.hit(bombs[i].x,bombs[i].y);
	}
}
//show, move and delete shots
  for (let i = 0; i < shots.length; i++) {
    shots[i].display();
    shots[i].move();
    if (shots[i].y === 0) {
      shots[i].destroy();
      shots.splice(i,1);
      }

  }
}

//which key is pressed
function keyPressed() {
  // UP - key (not used)
  if (keyCode === UP_ARROW) {
    //cannon_dir=2;

  } else if (keyCode === DOWN_ARROW) {

 } else if (keyCode == LEFT_ARROW) {
   cannon_dir = 0;
  } else if (keyCode === RIGHT_ARROW) {
    cannon_dir = 1;
  }
   if (key === '0') {
    cannon.reset_to_org(width/2,height-50);
    cannon_dir = 2;
  }
   // a kind of cheat code :- )
   if (key === '6') {
    ships_lost = int(random(8,20));
  }

//create shots if space is pressed
   if (key === ' ') {
      var shot = new Shot(cannon.x+20,cannon.y);
      shots.push(shot);
      count_shots++;
      song1.play();
   }

}
