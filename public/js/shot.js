class Shot {

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
    //rect(this.x,this.y,this.e1,this.e2,40);
    image(star_img,this.x,this.y,this.e1,this.e2);
  }

  move() {
    //move shots from cannon upwards
  	this.y = this.y - 10;
  }

  destroy() {
        this.x = this.x+1;
        this.e1 = 1;
	this.e2 = 1;

  }


}
