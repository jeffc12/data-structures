var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // add value to object 
    // assign tail value to something else 
    // replace value at tails with new value
    //Node[value] = list.tail;
    list.head = list.tail
    list.tail = Node(value)
  };

  list.removeHead = function() {

    
    list.head = list.tail;
    return list.head.value
  };

  list.contains = function(target) {
    for(var key in list){
      if (list[key].value === target){
        return true
      }
    }
    return false
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
