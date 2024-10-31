function binarySearch(arr, el) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== el && start <= end) {
    console.log(start, end, middle);
    if (el < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === el ? middle : -1;
}

const result = binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 30);
console.log(result); // 7

// [2, 5, 6, 9, 13, 15, 28, 30]
//  S        M           E

// [2, 5, 6, 9, 13, 15, 28, 30]
//              S    M      E

// [2, 5, 6, 9, 13, 15, 28, 30]
//                      SM  E

// [2, 5, 6, 9, 13, 15, 28, 30]
//                          SME
