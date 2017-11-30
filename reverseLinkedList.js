function Node(val) {
  this.val = val;
  this.next = null;
}


var a = new Node('a');
var b = a.next = new Node('b');
var c = b.next = new Node('c');
var d = c.next = new Node('d');



//reverse Linked List in Place

function reverseLL(rootNode) {
  var prevNode = null;
  var currNode = rootNode;
  var nextNode;

  while(currNode) {
    nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }
  return prevNode;
}

console.log(reverseLL(a));
