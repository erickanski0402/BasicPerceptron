let p;
let points = [];
let inputs = [-1, 0.5];
let trainingIndex = 0;

function setup(){
  createCanvas(600, 600)

  p = new Perceptron(3, 0.001);
  for(let i = 0; i < 100; i++){
    points[i] = new Point();
  }
  let guess = p.guess(inputs);
  console.log(guess)
}

function draw(){
  background(255);
  stroke(0);
  //line(0, height, width, 0 );
  let realPoint1 = new Point();
  realPoint1.setX(-1);
  realPoint1.setY(realPoint1.f(-1));
  let realPoint2 = new Point();
  realPoint2.setX(1);
  realPoint2.setY(realPoint2.f(1));
  line(realPoint1.pixelX(), realPoint1.pixelY(), realPoint2.pixelX(), realPoint2.pixelY());


  let guessPoint1 = new Point();
  guessPoint1.setX(-1);
  guessPoint1.setY(p.guessY(-1));
  let guessPoint2 = new Point();
  guessPoint2.setX(1);
  guessPoint2.setY(p.guessY(1));
  line(guessPoint1.pixelX(), guessPoint1.pixelY(), guessPoint2.pixelX(), guessPoint2.pixelY());


  points.forEach(function(element){
    element.show();
  });

  points.forEach(function(element){
    let inputs = [element.x, element.y, element.bias];
    let target = element.label;
    //p.train(inputs, target);

    let guess = p.guess(inputs);
    if(guess == target){
      fill(0, 255, 0);
    }else{
      fill(255, 0, 0);
    }

    noStroke();
    ellipse(element.pixelX(), element.pixelY(), 16, 16);
  });

  let training = points[trainingIndex];
  let inputs = [training.x, training.y, training.bias];
  let target = training.label;
  p.train(inputs, target);
  trainingIndex++;

  //How can I properly display the 'line' separating positive/negative examples?
  // stroke(0);
  line(0, (p.weights[0] * 0 + p.weights[1]), width, (p.weights[0] + p.weights[1] * height))
  // console.log(p.weights[0] + "  " + p.weights[1]);

  if(trainingIndex == points.length){
    trainingIndex = 0;
  }
}

function mousePressed(){
  // points.forEach(function(element){
  //   let inputs = [element.x, element.y];
  //   let target = element.label;
  //   p.train(inputs, target);
  // });
}
