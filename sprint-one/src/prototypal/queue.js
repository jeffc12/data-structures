var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueStack = Object.create(queueMethods); 
  queueStack.counter = 0; 
  queueStack.length = 0; 
  return queueStack; 

};

var queueMethods = {};


queueMethods.enqueue = function(value) { 
	this.counter++; 
	this.length++; 
	this[this.counter] = value;

	return this[this.counter]; 

}

queueMethods.dequeue = function() { 
	if(this.length > 0) { 
		this.length--; 
	}	
	var temp = this[Object.keys(this)[0]];
		
		
	
	delete this[Object.keys(this)[0]]; 
	return temp;
}

queueMethods.size = function() { 
	return this.length; 
}