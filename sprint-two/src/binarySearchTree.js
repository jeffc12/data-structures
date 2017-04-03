var BinarySearchTree = function(value) {

var tree = Object.create(BinaryStorage);

	tree.left = null;
	tree.right = null;
	tree.value = value;

	return tree;
}

var BinaryStorage = {};

BinaryStorage.insert = function(value) {

if(value < this.value) {

		if (this.left) {
		this.left.insert(value);
		}
	else {
		this.left = BinarySearchTree(value);
	}
}

if (value > this.value) {

		if(this.right) {
			this.right.insert(value);
		}
		else {
			this.right = BinarySearchTree(value);
		}
	}

}

BinaryStorage.contains = function(value) {

	if(this.value === value) {
		return true;
	}

	if(this.right && value > this.value){

			return this.right.contains(value);
	}

	if (this.left && value < this.value){

		return this.left.contains(value);

	}

return false;
}

BinaryStorage.depthFirstLog = function(callback){

	callback(this.value);

	if(this.right) {
		this.right.depthFirstLog(callback);

	}

	if(this.left){
		this.left.depthFirstLog(callback);
	}

}




/*
 * Complexity: What is the time complexity of the above functions?
 */
