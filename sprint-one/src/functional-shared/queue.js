var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //creates new object 
  var qObject = {};
  //object should contain time 
  qObject.counter = 0;
  qObject.index = 0; 
  // use extend to join the two objects 
  _.extend(qObject,queueMethods);
  return qObject

};


var queueMethods = {};

//create a function for 
//create a function for enqueue
queueMethods.enqueue = function(value) {
	this.counter++;
	this.index++;
	this[this.counter] = value;
	return this[this.counter];
}

//create a function for dequeue
queueMethods.dequeue = function() { 
	var temp = this[Object.keys(this)[0]]; 
	if (this.index > 0) {
		this.index--;
	}
	delete this[Object.keys(this)[0]];
	return temp; 
}

//create a function for size 
queueMethods.size = function() {
	return this.index; 
}
