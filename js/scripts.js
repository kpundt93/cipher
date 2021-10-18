let userInput = prompt("Enter a sentence.");
console.log(userInput);

function capitalize(input) {
  let output = input.substr(0,1) + input.substr(-1,1);
  output = output.toUpperCase();
  return output;
}

function reverse(reverseInput){
  let output = reverseInput.substr(-1,1) + reverseInput.substr(0,1);
  return output;
}

function capRev(compoundInput){
  return reverse(capitalize(compoundInput));
}

console.log(capRev(userInput));