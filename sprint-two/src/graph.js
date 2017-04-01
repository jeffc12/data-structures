

// Instantiate a new graph
var Graph = function() {
	 
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	
	this[node] = [node]; 
	//console.log(this);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

	for (var key in this) { 
		if (key === node.toString()){
			return true;
		}
	}
	return false; 
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node){

for (var key in this) { 
		if (key === node.toString()){
			delete this[node];
		}
	
if (this[key] !== undefined) {

	for (var i = 1; i < this[key].length; i++) {

		//console.log(this[key]);
		if(this[key][i] === node) {

			this[key].splice(i,1);
		}
}
	}
}
	


};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	var result = false; 
	//console.log(this[fromNode]);
	this[fromNode].forEach(function(index) {

		if (index === toNode) {
			result = true; 
		}

	})

return result;

	
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	this[fromNode].push(toNode);
	this[toNode].push(fromNode);
	
	};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	
	var fromNodetarget;
	var toNodetarget;

	if (this[fromNode] !== undefined) {
	this[fromNode].forEach(function(index,i) {

		if (index === toNode) {
			fromNodetarget = i;
		}
	})
}
	
	this[fromNode].splice(fromNodetarget,1);
	
	this[toNode].forEach(function(index,i) {

		if (index === fromNode) {
			toNodetarget = i;
		}
	})
	this[toNode].splice(toNodetarget,1);

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {


		for (var key in this) {
			
			if (!isNaN(Number(key))) {
				//console.log(key);
				cb(key);
			}
		}

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


