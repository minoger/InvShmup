class Failure {

  constructor(x,y,e1,e2,r,g,b) {
    this.x = x; //starting point
    this.y = y; //starting point
    this.e1 = e1 ; //diameter
    this.e2 = e2; //diameter
    this.r = r; //color r
    this.g = g; //color r
    this.b = b; //color r
  }

  show() {
    fill(this.r,this.g,this.b);
    noStroke();
    rect(this.x,this.y,this.e1,this.e2);
  }

  update(r,g,b) {
  	this.r = r;
  	this.g = g;
  	this.b = b;
  }



}
