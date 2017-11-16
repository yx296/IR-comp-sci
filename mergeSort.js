var a = [34, 203, 3, 15, 2];
var b = [5, 2];

// Merge sort divides input array in two halves, calls itself for the
// two halves and then merges the two sorted halves with merge helper function
function mergeSort(arr) {

	if (arr.length === 1) {
		return arr; // array with single element is already sorted
	}

	//if array is even middle index will on the right side
	var middle = Math.floor(arr.length / 2);

	var left = arr.slice(0, middle); // [34, 203]
	var right = arr.slice(middle, arr.length); // [3, 15, 2]
	var sortedLeft = mergeSort(left);
	var sortedRight = mergeSort(right);

	// once two halves are sorted, merge them
	return merge(sortedLeft, sortedRight);
}


// Merges two sorted arrays so that the resulting array is also sorted
function merge(left, right) {
	var result = [];

	// while left and right still have values, compare the
	// first values of each them and push into result the smaller value
	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			result.push(left.shift());
		}
		else {
			result.push(right.shift());
		}
	}
	// whichever array is still non-empty, push the remaining numbers into result
	while (left.length) {
		result.push(left.shift());
	}

	while(right.length) {
		result.push(right.shift());
	}

	return result;
}


console.log(mergeSort(a));

// mergeSort([34, 203, 3, 15, 2]);

// merge(mergeSort([34, 203]), mergeSort([3, 15, 2]));

// mergeSort([34, 203])
// merge([34], [203])
// return [34, 203]

// mergeSort([3, 15, 2])
// var left = [3]
// var right = [15, 2]
// merge(mergeSort[3], mergeSort([15, 2])
// merge([3], [2, 15] )

// return [2, 3, 15]

// merge([34, 203], [2, 3, 15])
