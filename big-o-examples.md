# Big O Notation Examples

## Find the Max Value in Array

```js
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
```

- **Time Complexity:** `O(n)` - Loop that iterates `n` times.
- **Space Complexity:** `O(1)` - Constant amount of extra space.

## Nested Loop

```js
function double(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      total += arr[i] * arr[j];
    }
  }
  return total;
}
```

- **Time Complexity:** `O(n^2)` - Two nested loops, each running `n` times.
- **Space Complexity:** `O(1)` - Constant amount of extra space.

## Factorial

```js
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
```

- **Time Complexity:** `O(n)` - This function calls itself recursively `n` times.
- **Space Complexity:** `O(n)` - Each recursive call adds a new frame to the call stack.

## Recursive Fibonacci

```js
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

- **Time Complexity:** `O(2^n)` - Each call branches into two more calls, leading to an exponential growth in the number of calls.
- **Space Complexity:** `O(n)` - The maximum depth of the call stack corresponds to the deepest series of recursive calls made by the function. This sequence results in a call stack depth of `n` before any of the calls can return and the stack can start unwinding.

## Merge Two Sorted Arrays

```js
function mergeSortedArrays(arr1, arr2) {
  let merged = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}
```

- **Time Complexity:** `O(n + m)` - This function iterates through both arrays once, where `n` is the length of `arr1` and `m` is the length of `arr2`.
- **Space Complexity:** `O(n + m)` - The merged array can contain up to `n + m` elements.
