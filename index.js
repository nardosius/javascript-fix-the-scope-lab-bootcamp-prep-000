var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal = 'cat';
  return animal;
}

function add2(n) {
   // Feel free to move things around!
  const two = 2;
  return n + two;
}

var funkyFunction = function myFunction() {
  var inner = "FUNKY!";
 
  return function funk() {
    var inaccessible = "Can't touch this!";
    
    return "FUNKY!";
  }
 }

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction();



