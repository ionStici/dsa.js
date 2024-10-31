# Searching Algorithms

## Table of Contents

- [Linear Search](#linear-search)
- [Binary Search](#binary-search)
- [Naive Search](#naive-string-search)

## Linear Search

**Linear Search:** find an element within a list by sequentially checking each element of the list until a match is found or the entire list has been searched.

- Big O of Linear Search: `O(n)`
- JavaScript array methods that use linear search: `indexOf`, `includes`, `find`, `findIndex`.

```js
const list = [32, 56, 12, 1, 43];

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

linearSearch(list, 1);
```

## Binary Search

**Binary Search** works by comparing the target value to the middle element of the array, if the target is greater or less than the middle element, the left or right half of the array is eliminated accordingly and the same process continues with the remaining elements until the target value is found, or not.

- **Binary search only works on sorted arrays**, but is much faster than linear search in this case.
- Big O of Binary Search: Worst and Average Case `O(log n)` & Best Case `O(1)`

```ts
// Binary Search
function binarySearch(arr, el) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== el && start <= end) {
    if (el < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === el ? middle : -1;
}

const result = binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 30);
console.log(result); // 7

// [2, 5, 6, 9, 13, 15, 28, 30]
//  S        M              E

// [2, 5, 6, 9, 13, 15, 28, 30]
//              S   M       E

// [2, 5, 6, 9, 13, 15, 28, 30]
//                      SM  E

// [2, 5, 6, 9, 13, 15, 28, 30]
//                          SME
```

## Naive String Search

**Pseudocode:**

- Loop over the longer string
- Loop over the shorter string
- If the characters don't match, break out of the inner loop
- If the characters do match, keep going
- If you complete the inner loop and find a match, increment the count of matches
- Return the count

```js
// Naive String Search
function naiveSearch(long, short) {
  let count = 0;

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }

  return count;
}
const count = naiveSearch("hello, lol", "lo"); // 2
```
