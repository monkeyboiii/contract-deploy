"use strict";

const items = [5, 3, 7, 6, 2, 9];

const swap = (items: Array<any>, i: any, j: any) => {
  const temp = items[i];
  items[i] = items[j];
  items[j] = temp;
};

const partition = (items: Array<any>, left: number, right: number) => {
  let pivot = items[right];
  let i = left; //left pointer
  let j = right - 1; //right pointer
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }

  swap(items, i, right);

  return i;
};

const quickSort = (items: Array<any>, left: number, right: number) => {
  let index;
  if (items.length > 1) {
    // index returned from partition
    index = partition(items, left, right);
    if (left < index - 1) {
      // more elements on the left side of the pivot
      quickSort(items, left, index - 1);
    }
    if (index + 1 < right) {
      // more elements on the right side of the pivot
      quickSort(items, index + 1, right);
    }
  }
  return items;
};

// first call to quick sort
const sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray); //prints [2,3,5,6,7,9]
