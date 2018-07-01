class Ship {

  constructor(x,y) {
    this.x = x; //starting point
    this.y = y; //starting point
    this.e1 = 35; //diameter
    this.e2 = 15; //diameter
    this.c = (255,int(random(0,200)),int(random(0,200))); //color
  }

  display() {
   //initial and additional display ships at random position
   image(ship_img,this.x,this.y,this.e1,this.e2);
  }

  move() {
    //move ship 10 pixel downwards
    this.y = this.y + 10;
	    
  }

  destroy() {
    //bei Verschiebung um einen Punkt, kann ship nicht mehr getroffen werden
    //kein zusatzpunkt
    this.c = (255,0,0);
    fill(this.c);
    this.x = this.x +1;
    this.y = this.y +1;
    this.e1 = 2;
    this.e2 = 2;

  }
}
