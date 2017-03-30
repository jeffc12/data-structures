var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0; 
 
};

Stack.prototype.push = function(value) { 
	this.counter++; 
	this[this.counter] = value; 
	return this[this.counter]; 
}

Stack.prototype.pop = function() {
	var temp = this[this.counter]; 
	delete this[this.counter];

	if (this.counter > 0) { 
		this.counter--;
	}

	return temp;
}


Stack.prototype.size = function() {
	return this.counter; 
}