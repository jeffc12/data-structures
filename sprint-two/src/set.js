var Set = function() {
  var set = Object.create(setPrototype);
  set.size = 0; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
	this[item] = item
};

setPrototype.contains = function(item) {
	var result = false
	for (var key in this){
		if(key === item){
			result = true
		}
	}
	return result
};

setPrototype.remove = function(item) {
	delete this[item]
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
