

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //console.log(this._storage);

};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = [];

  if (this._storage.get(index)) {

      bucket = this._storage.get(index);

    for (var i = 0; i <bucket.length; i++) {
      if(bucket[i][0] === k) {
        bucket[i][1] = v;
      }
    }
  }

  bucket.push([k,v]);
  this._storage.set(index,bucket);

}


HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  //console.log(this._storage.get(index));
  if (bucket) {
  for(var i = 0; i<bucket.length;i++) {
    if(bucket[i][0] === k) {
      //console.log(element[1]);
      return bucket[i][1];
    }
  }
}
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);

  if(bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket.shift(i,1);
      }
    }
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
