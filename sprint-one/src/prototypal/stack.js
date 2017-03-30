var Stack = function() {
  
  var objectStack = Object.create(stackMethods); 
  objectStack.counter = 0 ; 
  return objectStack; 
};

var stackMethods = {};

stackMethods.push = function(value) { 

	this.counter++; 
	stackMethods[this.counter] = value; 

	return stackMethods[this.counter]; 

}

stackMethods.pop = function () {
	// body...
	var temp = stackMethods[this.counter];
	delete stackMethods[this.counter]; 

	if (this.counter > 0) {
		this.counter--; 
	}

	return temp
}

stackMethods.size = function() { 
	return this.counter; 
}

