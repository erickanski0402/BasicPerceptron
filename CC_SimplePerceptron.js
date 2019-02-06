let p;
let points = [];
let learningRate = 0.005;
//Learning rate initialized low for ease of understanding visuals
let inputs = [random(-1, 1),random(-1,1), 1];
//Perceptron initialized with random weights
let trainingIndex = 0;
//Used to determine which point the line is being fitted for at each 'draw()'

function setup(){
  createCanvas(600, 600)
  //creates the canvas

  p = new Perceptron(inputs.length, learningRate);
  //perceptron initialized to the number of inputs provided and learning rate
  for(let i = 0; i < 100; i++){
    points[i] = new Point();
    //100 points are generated as random cartesian coordinates for training data
  }
  // let guess = p.guess(inputs);
  // console.log(guess)
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
  //Draws the actual line of best fit for the data
  //    Found by finding what f(x) will be at x = -1 and again at x = 1


  let guessPoint1 = new Point();
  guessPoint1.setX(-1);
  guessPoint1.setY(p.guessY(-1));
  let guessPoint2 = new Point();
  guessPoint2.setX(1);
  guessPoint2.setY(p.guessY(1));
  line(guessPoint1.pixelX(), guessPoint1.pixelY(), guessPoint2.pixelX(), guessPoint2.pixelY());
  //Draws the perceptrons guessed line of best fit
  //    Found by finding what the perceptron thinks f(x) should be at x = -1 and x = 1


  points.forEach(function(element){
    element.show();
    //Draws each point in the list
  });

  points.forEach(function(element){
    let inputs = [element.x, element.y, element.bias];
    //for each element in points, records the x, y, and bias
    let target = element.label;
    //gets the label (+1 or -1) for each element in points
    //p.train(inputs, target);

    let guess = p.guess(inputs);
    //Makes a guess based on the inputs recorded per element
    if(guess == target){
      fill(0, 255, 0);
      //If the guess is correct then the circle is colored in green
    }else{
      fill(255, 0, 0);
      //otherwise the guess is incorrect and is colored in red
    }

    noStroke();
    ellipse(element.pixelX(), element.pixelY(), 16, 16);
    //Draws the circle depicting correctness or incorrectness
  });

  let training = points[trainingIndex];
  let inputs = [training.x, training.y, training.bias];
  let target = training.label;
  p.train(inputs, target);
  trainingIndex++;
  //Trains the perceptron with one point per iteration of 'draw()'

  if(trainingIndex == points.length){
    trainingIndex = 0;
    //Once the last point has been reached, reset the training index to 0
  }
}

function mousePressed(){
  // points.forEach(function(element){
  //   let inputs = [element.x, element.y];
  //   let target = element.label;
  //   p.train(inputs, target);
  // });
}
