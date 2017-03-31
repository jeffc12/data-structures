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
	
	var result = false; 
	var call = this; 

 function search(compare, values) { 
 	
		if (values.value === compare) { 
			result = true;
		}

		if (Array.isArray(values.children)) { 

			values.children.forEach(function(index) { 

				search(target, index);

			})
		}
	}

search(target,call); 

return result; 

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
