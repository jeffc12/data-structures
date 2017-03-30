var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0; 
  this.length = 0; 

};

Queue.prototype.enqueue = function(value) { 
	this.counter++;
	this.length++;

	this[this.counter] = value; 

	return this[this.counter]; 
}

Queue.prototype.dequeue = function() { 
	var temp = this[Object.keys(this)[0]]; 
	delete this[Object.keys(this)[0]];

	if(this.length > 0) {
		this.length--; 
	}

	return temp;
}

Queue.prototype.size = function() { 
	return this.length; 
}