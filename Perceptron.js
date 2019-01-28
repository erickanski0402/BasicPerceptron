/*
  Perceptron Algorithm
    1. For every input, multiply that input by it's weight
    2. Sum all of the weighted inputs
    3. Compute the output of the perceptron based on the sum passed through an
    activation function (the sign of the sum).
*/

class Perceptron{
  // Constructor
  constructor(numWeights, learningRate){
    // Initialize the weights randomly
    this.weights = [];
    for(let i = 0; i < numWeights; i++){
      this.weights[i] = random(-1, 1);
    }

    this.lr = learningRate;
  }

  sign(n){
    //Activation function
    if(n >= 0){
      return 1;
    }else{
      return -1;
    }
  }

  guess(inputs){
    let sum = 0;

    for(let i = 0; i < this.weights.length; i++){
      sum += inputs[i] * this.weights[i];
      //Sum all the weighted inputs
    }

    let output = this.sign(sum);
    //Run the sum through the activation function
    return output;
  }

  train(inputs, target){
    let guess = this.guess(inputs);
    //get the guessed answer for each input
    let error = target - guess;
    //calculate the error

    for(let i = 0; i < this.weights.length; i++){
      //tune all the weights
      this.weights[i] += error * inputs[i] * this.lr;
      //change the weights based on how far off they were
    }
  }
}
