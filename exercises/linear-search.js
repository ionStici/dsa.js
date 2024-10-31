function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}
// console.log(linearSearch([43, 23, 65, 232, 650, -3, 0, 43], 0)); // 6
