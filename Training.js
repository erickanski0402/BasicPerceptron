class Point{
  constructor(){
    this.x = random(-1,1);
    this.y = random(-1,1);
    //Random coordinates set

    this.bias = 1;

    this.lineY = this.f(this.x);
    if(this.y > this.lineY){
      this.label = 1;
    }else{
      this.label = -1;
    }
  }

  f(x){
    //y = mx + b
    //The equation the perceptron is chasing
    return 0.3*x + 0.2;
  }

  setX(x_){
    this.x = x_;
  }

  setY(y_){
    this.y = y_;
  }

  pixelX(){
    return map(this.x, -1,1,0, width);
    //Maps the coordinates to a cartesian plane
  }

  pixelY(){
    return map(this.y, -1,1,height, 0);
    //Maps the coordinates to a cartesian plane
  }

  show(){
    stroke(0);
    if(this.label == 1){
      fill(255);
      //Positive examples
    }else{
      fill(0);
      //Negative examples
    }

    let px = this.pixelX();
    let py = this.pixelY();
    ellipse(px, py, 30, 30);
    //Draws the circle for each coordinate
  }
}
