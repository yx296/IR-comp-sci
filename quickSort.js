var arr = [10, 80, 30, 90, 40, 50, 70];

var simpleArr = [2, 5, 4, 3, 1];

function swap(items, firstIndex, secondIndex){
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function quickSort(arr, low, high) { debugger
  if (low < high) {
    var pivotNewIndex = partition(arr, low, high);
    quickSort(arr, low, pivotNewIndex - 1); // sort lower half recursively
    quickSort(arr, pivotNewIndex + 1, high); // sort upper half recursively
  }

  return arr;
}




/* This function takes last element as pivot, places
   the pivot element at its correct position in sorted
    array, and places all smaller (smaller than pivot)
   to left of pivot and all greater elements to right
   of pivot */


function partition(arr, low, high) {
  var pivot = arr[high];
  var i = low - 1;
  for (var j = low; j<= high - 1; j++) {
    //if current element is smaller than or equal to pivot
    if (arr[j] <= pivot) {
      i++; //increment index of smaller element
      swap(arr, j, i);
    }
  }
  swap(arr, high, i + 1);
  return i+1; // after partition process, return the index of the pivot
}

console.log(quickSort(arr, 0, arr.length-1));
// console.log(quickSort(simpleArr, 0, simpleArr.length-1));


//SEE PARTITION NOTES
