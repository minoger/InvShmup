class Cannon {

  constructor(x,y) {
    this.x = x; //starting point
    this.y = y; //starting point
    this.e1 = 50; //diameter
    this.e2 = 50; //diameter
    this.c = 0; //color
  }

  show(move) {
    //move cannon left an right
    this.y = this.y - move;
    //fill(this.c);
    //rect(this.x,this.y - move,this.e1,this.e2,20);
    image(cannon_img,this.x,this.y - move,this.e1,this.e2);
  }

    move(dir) {
      //decide wehre to move (left or right)

      if (dir === 1 && this.x < width-50) {
        //move 10 pixel to the right
        this.x = this.x + 10;
      } else if (dir === 0 && this.x > 0) {
        //move 10 pixel to the left
        this.x = this.x - 10;
      }
    }

   reset_to_org(x,y) {
     //reset cannon to center point
    this.x = x;
    this.y = y;
   }


   hit(x,y) {
      push();	   
      stroke(255,0,0);
      strokeWeight(20);
      line(x-20,y,x+20,y);
      pop();
  }

}

function help() {
	//do something
	//
}





