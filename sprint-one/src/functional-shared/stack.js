var Stack = function() {
  // create new object
  // object has 1 property of counter = 0 
  var stackMethodObject = {};
  stackMethodObject.counter = 0;
  _.extend(stackMethodObject, stackMethodObject.methods)
  return stackMethodObject
};

stackMethodObject.methods = {};

// create object with following methords
	// use _.extend(destination, *sources)  to add functions to main object
stackMethodObject.methods.push = function(value) { 


}
// create push
	// add element to object at the end 
	// increase counter this.counter ++
stackMethodObject.methods.pop = function() { 
// create pop 
	// remove element from object from the end 
	// decrease counter this.counter --
} 

stackMethodObject.methods.size = function() { 
// create size 
	// return this.counter 

} 



