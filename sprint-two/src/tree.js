var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
 
  newTree.children = [];  // fix me

_.extend(newTree, treeMethods)
  return newTree;
};



var treeMethods = {};

treeMethods.addChild = function(value) {
	
	this[this.value] = value; 

 this.children.push(Tree(value));

	
};

treeMethods.contains = function(target) {
	/*for(var key in this){
		if(this[key]===target){
			return true
		}
	}
	return false
	*/
	var call = this.value; 

 function search(compare, values) { 
if (this.value === target) { 

	return true; 
	}

if (Array.isArray(this.children)) { 

	this.children.forEach(function(index) { 

		})
}
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
