// // // // // // // // // // // // // // // // // // // //
// Simple Recursive Function
function countDown(num) {
  if (num < 1) return;
  console.log(num);
  countDown(num - 1);
}
// countDown(5);

// // // // // // // // // // // // // // // // // // // //
// Factorial Recursion
// My Implementation
function factorial(num) {
  if (num < 1) return 1;
  return num * factorial(num - 1);
}
// console.log(factorial(5));

// SOLUTION
function factorial(x) {
  if (x < 0) return 0;
  if (x <= 1) return 1;
  return x * factorial(x - 1);
}

// // // // // // // // // // // // // // // // // // // //
// HELPER METHOD RECURSION
function collectEvenValues_1(arr) {
  const result = [];

  function helper(input) {
    if (input.length < 1) return;

    if (input[0] % 2 === 0) result.push(input[0]);

    helper(input.slice(1));
  }

  helper(arr);

  return result;
}
// console.log(collectEvenValues_1([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// // // // // // // // // // // // // // // // // // // //
// PURE RECURSION
function collectEvenValues_2(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 === 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectEvenValues_2(arr.slice(1)));
  return newArr;
}
// console.log(collectEvenValues_2([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// // // // // // // // // // // // // // // // // // // //
// Power
// My Implementation
function power(base, exponent) {
  if (exponent === 0) return 1;
  if (exponent < 2) return base;
  return base * power(base, exponent - 1);
}
// console.log(power(2, 0)); // 1
// console.log(power(2, 4)); // 2 * 2 * 2 * 2 = 16

// SOLUTION
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

// // // // // // // // // // // // // // // // // // // //
// Product Of Array
// My Implementation
function productOfArray(arr) {
  if (arr.length === 0) return 1;

  return arr[0] * productOfArray(arr.slice(1));
}
// console.log(productOfArray([5, 3, 6, 2, 6, 2]));

// Solution
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

// // // // // // // // // // // // // // // // // // // //
// Recursive Range
// My Implementation
function recursiveRange(num) {
  if (num < 0) return 0;
  return num + recursiveRange(num - 1);
}
// console.log(recursiveRange(6)); // 0+1+2+3+4+5=15

// Solution
function recursiveRange(x) {
  if (x === 0) return 0;
  return x + recursiveRange(x - 1);
}

// // // // // // // // // // // // // // // // // // // //
// nth number from the fibonacci sequence
// My Implementation
function fib(num) {
  function helper(num, fibArr) {
    if (num < 1) return num;
    if (fibArr[num - 1]) return fibArr[num - 1];
    return helper(num, [...fibArr, fibArr.at(-1) + fibArr.at(-2)]);
  }
  return helper(num, [1, 1]);
}
// console.log(fib(10)); // 55

// Solution
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// // // // // // // // // // // // // // // // // // // //
// Reverse a string
// My Implementation
function reverse(str) {
  if (str.length === 1) return str;
  return str[str.length - 1] + reverse(str.slice(0, -1));
}
console.log(reverse("awesome")); // 'emosewa'

function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

// // // // // // // // // // // // // // // // // // // //
// Write a recursive function called `isPalindrome` which returns true if the string passed to it is a palindrome (reads the same forward and backend). Otherwise it returns false.
function isPalindrome(str) {}

isPalindrome("radar"); // true

// // // // // // // // // // // // // // // // // // // //
