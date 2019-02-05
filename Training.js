class Point{
  constructor(){
    this.x = random(-1,1);
    this.y = random(-1,1);

    this.px = 0;
    this.py = 0;
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
  }

  pixelY(){
    return map(this.y, -1,1,height, 0);
  }

  show(){
    stroke(0);
    if(this.label == 1){
      fill(255);
    }else{
      fill(0);
    }

    this.px = this.pixelX();
    this.py = this.pixelY();
    ellipse(this.px, this.py, 30, 30);
  }
}
