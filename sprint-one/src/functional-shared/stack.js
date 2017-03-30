var Stack = function(counter) {
  // create new object
  // object has 1 property of counter = 0 
  var stackMethodObject = {};
  stackMethodObject.counter = 0;
  
  return _.extend(stackMethodObject, Stackmethods);
};

var Stackmethods = {};

// create object with following methords
	// use _.extend(destination, *sources)  to add functions to main object
Stackmethods.push = function(value) { 
	this.counter++; 
	this[this.counter] = value; 

	return this[this.counter]; 

}
// create push
	// add element to object at the end 
	// increase counter this.counter ++
Stackmethods.pop = function() { 
	var temp = this[this.counter]; 
	delete this[this.counter];
	if (this.counter > 0) {
	this.counter--; 
} 
// create pop 
	// remove element from object from the end 
	// decrease counter this.counter --
	return temp; 
} 

Stackmethods.size = function() { 
// create size 
	return this.counter; 
	// return this.counter 

} 



