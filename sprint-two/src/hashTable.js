

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //console.log(this._storage);

};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  	var bucket = [k,v]
  	this._storage.set(index,bucket)
  
  if (this._storage.get(index)) {

  	
  })

}



HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var result = this._storage.get(index);
  var value 
console.log(this._storage.get(index));
  if(result === undefined){
  	return undefined
  } else {
  for( var i =0; i<result.length; i++){
  	if (result[i] === k){
  		value = i
  	}

  	return result[1];
  }
  
}
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

 this._storage.set(index,undefined)



};



/*
 * Complexity: What is the time complexity of the above functions?
 */


