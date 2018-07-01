class Counter {

  constructor() {
    this.x = 0; //starting point
    this.y = 0; //starting point
    this.e1 = 120; //diameter
    this.e2 = 50; //diameter
    this.c = 200; //color
  }

  show() {
    fill(this.c);
    noStroke();
    rect(this.x,this.y,this.e1,this.e2);
  }

  move() {
  	this.y = this.y - 10;
  }



}
