var BinarySearchTree = function(value) {

	var storage = {}; 
	storage.tree = {};


storage.left = function() {

}

storage.right = function() {

}

storage.insert = function(value) {

	if(value)
		storage.tree[value] =value;
	
}

storage.contains = function(value) {
	return (storage.tree.indexOf(value) !== -1);
}

storage.depthFirstLog = function(callback) {

	return callback(storage.tree);
}

console.log(storage.tree);
return storage;

};





/*
 * Complexity: What is the time complexity of the above functions?
 */
