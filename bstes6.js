// a binary  search tree class done with es6

// A binary search tree (BST) is a binary tree where each node has a Comparable key (and an associated value)
// and satisfies the restriction that the key in any node is larger than the keys in all nodes in that
// node's left subtree and smaller than the keys in all nodes in that node's right subtree.



class BinarySearchTree {
	constructor(val) {
		this.value = val;
		this.left = null;
		this.right = null;
	}

	insert(nodeValue) {
		// inserts new node into tree
		if (nodeValue < this.value) {
			if (this.left) {
				this.left.insert(nodeValue);
			} else {
				this.left = new BinarySearchTree(nodeValue);
			}
		}

		if (nodeValue > this.value) {
			if (this.right) {
				this.right.insert(nodeValue);
			} else {
				this.right = new BinarySearchTree(nodeValue);
			}
		}
	}

	// returns boolean indicating if nodeValue exists in tree
	contains(nodeValue) {
		//start with root
		if (this.value === nodeValue) {
			return true;
		}
		// if looking for nodeValue greater than current root, recursively search right subtree if right subtree exists,
		// otherwise return false
		if (nodeValue > this.value) {
			if (this.right) {
				return this.right.contains(nodeValue);
			} else {
				return false;
			}
		}

		// if looking for nodeValue less than current root, recursively search left subtree if a left subtree exists,
		// otherwise return false
		if (nodeValue < this.value) {
			if (this.left) {
				return this.left.contains(nodeValue);
			} else {
				return false;
			}
		}
	}
}

let bst = new BinarySearchTree(5); // initialize root of bst with 5

bst.insert(3); // since 3 is less than 5 and 5's left subtree is null, 3 is created as a new BST and is stored as 5's left node
bst.insert(2); // 2 is also less than 5, but now this.left exists on 5 so 2 is recursively set as left node of 3. (since 2 < 3)
bst.insert(4); // 4 is less than 5 as well, but greater than 3 so it gets set as right node of 3.
bst.insert(8); // 8 is greater than 5 and 5 currently has no right subtree so 8 becomes right node of 5...
bst.insert(7); // and so on
bst.insert(9);
bst.insert(6);

//       5
//   3      8
// 2   4  7   9
//       6


console.log(JSON.stringify(bst));
// console.log(bst);
console.log(bst.contains(1)); // false
console.log(bst.contains(4)); // true
