let p;
let points = [];
let inputs = [-1, 0.5];

function setup(){
  createCanvas(600, 600)

  p = new Perceptron(2, 0.1);
  for(let i = 0; i < 100; i++){
    points[i] = new Point();
  }
  let guess = p.guess(inputs);
  console.log(guess)
}

function draw(){
  background(255);
  stroke(0);
  line(0, 0, width, height);
  points.forEach(function(element){
    element.show();
  });

  points.forEach(function(element){
    let inputs = [element.x, element.y];
    let target = element.label;
    //p.train(inputs, target);

    let guess = p.guess(inputs);
    if(guess == target){
      fill(0, 255, 0);
    }else{
      fill(255, 0, 0);
    }

    noStroke();
    ellipse(element.x, element.y, 16, 16);
  });
}

function mousePressed(){
  points.forEach(function(element){
    let inputs = [element.x, element.y];
    let target = element.label;
    p.train(inputs, target);
  });
}
