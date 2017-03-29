var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var keySize = 0
  var objSize = 0


  // Implement the methods below

  someInstance.enqueue = function(value) {
    keySize++;
    objSize++
    someInstance[keySize] = value; 
    return someInstance[keySize]
  };

  someInstance.dequeue = function() { 
 var tempValue = someInstance[Object.keys(someInstance)[0]]
  delete someInstance[1]
  if (objSize > 0) {
    objSize--;
  }
return tempValue
  };

  someInstance.size = function() {
    return objSize;
  };

  return someInstance;
};
