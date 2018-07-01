class Bomb {

  constructor(x,y) {
    this.x = x; //starting point
    this.y = y; //starting point
    this.e1 = 10; //diameter
    this.e2 = 10; //diameter
    this.c = 0; //color
  }

  display() {
    //display cannon shots
    //fill(255,255,0);
    rect(this.x,this.y,this.e1,this.e2,80);
    //image(star_img,this.x,this.y,this.e1,this.e2);
  }

  move() {
    //move bombs from ships downwards
  	this.y = this.y + 5;
  }

  destroy() {
        this.x = this.x+1;
        this.e1 = 1;
	this.e2 = 1;

  }


}
