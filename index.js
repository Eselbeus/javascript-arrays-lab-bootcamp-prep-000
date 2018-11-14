// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

<<<<<<< HEAD
function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  var newKittens = kittens.concat(name);
  return newKittens;
}

function prependKitten(name){
  var newKittens = [name, ...kittens];
  return newKittens;
}

function removeLastKitten(){
  var newKittens = kittens.slice(0, -1);
  return newKittens;
}

function removeFirstKitten(){
  var newKittens = kittens.slice(1);
  return newKittens;
}
=======
function 
>>>>>>> 7ab185a3324af1b02953745ed1ed7f70236b35c7
