

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //console.log(this._storage);

};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  	var add = function(value, key, array) {

  		if( value = index) {
  			array[key].push(this.storage.set(index,v));
  		}
  	}
  if(this._storage.get(index)) {


  	this._storage.each(add);
	}

	else {
		this._storage.set(index,v);
	}
}


HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

	//console.log(this);
  return this._storage.get(index);


};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var call = function(value,key,array) {

  	if(value = index) {

  		array.splice(key,1);
  	}
  }

  this._storage.each(call);



};



/*
 * Complexity: What is the time complexity of the above functions?
 */


