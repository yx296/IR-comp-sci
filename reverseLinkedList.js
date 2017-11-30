function Node(val) {
  this.val = val;
  this.next = null;
}

// each node in linked list holds a value and a next reference to the next node of the linked List, or null

var a = new Node('a');
var b = a.next = new Node('b');
var c = b.next = new Node('c');
var d = c.next = new Node('d');

// a---b---c---d---null


// Function for reversing a linked List so result is
// 
// d---c---b---a---null

// Solution: keep 3 pointers and iterate through list, in each iteration
// change current nodes next to prev, 
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

// First iteration
// nextNode = currNode.next, assign nextNode pointer to B

// P      C   N
// null   a -> b -> c -> d -> null

// currNode.next = prevNode

//  C      P      N
//  a -> null     b -> c -> d -> null

//
// prevNode = currNode, now need to make A the "new" previousNode

//  C
//  P             N
//  a -> null     b -> c -> d -> null

// currNode = nextNode, and now currNode needs to refer to the "old" nextNode, B

//                C
//  P             N
//  a -> null     b -> c -> d -> null

// and the while loop iterates again until the end of the list.
// 2nd iteration
// 
// nextNode = currNode.next
//                C
//  P                  N
//  a -> null     b -> c -> d -> null

// currNode.next = prevNode;
//  C    P            N
//  b -> a -> null    c -> d -> null


// prevNode = currNode, now need to make B the "new" previousNode

//  C
//  P                 N
//  b -> a -> null    c -> d -> null

// currNode = nextNode, and now currNode needs to refer to the "old" nextNode, C

//                    C
//  P                 N
//  b -> a -> null    c -> d -> null

// go into loop again, eventually prev Node will be pointing to D (the new head) after while loop ends
// and we return that
// d --> c --> b-->a --Null

