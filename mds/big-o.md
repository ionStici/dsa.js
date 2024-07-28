# Big O Notation

## Table of Contents

- [Introduction](#introduction)
- [Why Big O?](#why-big-o)
- [Key Concepts](#key-concepts)
- [Performance Metric](#performance-metric)
  - [Best, Average, and Worst Case](#best-average-and-worst-case)
- [How it Works](#how-it-works)
- [Big O Notations](#big-o-notations)
  - [1. Constant Time Complexity `O(1)`](#1-constant-time-complexity-o1)
  - [2. Linear Time Complexity `O(n)`](#2-linear-time-complexity-on)
  - [3. Quadratic Time Complexity `O(n^2)`](#3-quadratic-time-complexity-on2)
  - [4. Logarithmic Time Complexity `O(log n)`](#4-logarithmic-time-complexity-olog-n)
  - [5. Linearithmic Time Complexity `O(n log n)`](#5-linearithmic-time-complexity-on-log-n)
  - [6. Exponential Time Complexity `O(2^n)`](#6-exponential-time-complexity-o2n)
  - [7. Factorial Time Complexity `O(n!)`](#7-factorial-time-complexity-on)
  - [Efficiency](#efficiency)
- [Examples of Big O Notations](#examples-of-big-o-notations)
  - [1. Constant Time Complexity Example `O(1)`](#1-constant-time-complexity-example-o1)
  - [2. Linear Time Complexity Example `O(n)`](#2-linear-time-complexity-example-on)
  - [3. Quadratic Time Complexity Example `O(n^2)`](#3-quadratic-time-complexity-example-on2)
- [Simplifying Big O Expressions](#simplifying-big-o-expressions)
  - [Common Operations and Their Complexities](#common-operations-and-their-complexities)
  - [Ignoring Constants](#ignoring-constants)
  - [Ignoring Lower-Order Terms](#ignoring-lower-order-terms)
- [Space Complexity](#space-complexity)
  - [Space Complexity in JavaScript](#space-complexity-in-javascript)
  - [Example of Constant Space Complexity](#example-of-constant-space-complexity)
  - [Example of Linear Space Complexity](#example-of-linear-space-complexity)
- [Logarithmic Complexity](#logarithmic-complexity)
  - [Understanding Logarithmic Complexity](#understanding-logarithmic-complexity)
- [Linearithmic Complexity](#linearithmic-complexity)
  - [Understanding Linearithmic Complexity](#understanding-linearithmic-complexity)
- [Big O and Recursion](#big-o-and-recursion)
- [Recapitulation](#recapitulation)
- [Practical Considerations](#practical-considerations)
- [Conclusion](#conclusion)

## Introduction

**Big O Notation** is a mathematical concept used to describe the efficiency of algorithms, particularly focusing on their time and space complexity. It provides a high-level understanding of how an algorithm's performance changes with the size of the input `n`.

## Why Big O?

Image having multiple implementations of the same function, how can we determine which one is the "best"?

1. **Comparison of Algorithms:** Big O helps in comparing the efficiency of different algorithms, allowing developers to choose the most optimal one for a given problem.
2. **Scalability:** Measures how the memory usage of an algorithm changes with the input size.

## Key Concepts

- **Time Complexity:** Measures how the execution time of an algorithm changes with the input size.
- **Space Complexity:** Measures how the memory usage of an algorithm changes with the input size.

## Performance Metric

**Big O** measures the number of simple operations the computer must perform as the input size increases.

- For example, the expression `n * (n + 1)  / 2` always performs exactly 3 operations, regardless of the value of `n`. This is an example of constant time complexity, denoted as `O(1)`.

- In contrast, if an implementation uses a loop that iterates `n` times, the number of operations grows linearly with `n`. Doubling `n` roughly doubles the number of operations, illustrating linear time complexity denoted as `O(n)`.

Big O focuses on the growth rate of an algorithm rather than exact code timing, offering a more consistent measure.

### Best, Average, and Worst Case

- Big O notation typically describes the worst-case scenario, ensuring the algorithm's performance will not exceed the stated bounds.
- Sometimes, other notations like Theta (Θ) and Omega (Ω) are used to describe the average and best-case complexities, respectively.

## How it Works

We say that an algorithm is `O(f(n))` if, as the size of the input `n` increases, the number of basic operations it performs grows no faster than `f(n)` multiplied by some constant. Essentially, Big O describes the upper limit on the growth rate of the algorithm's operations, ensuring it won't exceed this rate for large inputs.

`f(n)` could be constant `f(n) = 1`, linear `f(n) = n`, quadratic `f(n) = n^2`, or other forms, depending on the algorithm's nature.

Big O notation helps describe the relationship between the size of the input `n` and the computational effort required.

`(f(n) = n^2)` means a function with an input of `n` and the output `n^2`, which describes the relation between the input and the runtime.

For clarity, we simplify `O(f(n))` to `O(n)` to focus on the main factor affecting the algorithm's growth rate.

## Big O Notations

### 1. Constant Time Complexity `O(1)`

- The runtime does not change with the size of the input.
- Example: Accessing an element in an array by index or performing an arithmetic operation.

### 2. Linear Time Complexity `O(n)`

- The runtime grows linearly with the input size.
- Example: Iterating through an array.

### 3. Quadratic Time Complexity `O(n^2)`

- The runtime grows quadratically with the input size.
- Example: Nested loops iterating over the input.

### 4. Logarithmic Time Complexity `O(log n)`

- The runtime grows logarithmically as the input size increases.
- Example: Binary search in a sorted array.

### 5. Linearithmic Time Complexity `O(n log n)`

- The runtime grows in a combination of linear and logarithmic scales.
- Example: Efficient sorting algorithms like Merge Sort and Quick Sort.

### 6. Exponential Time Complexity `O(2^n)`

- The runtime doubles with each additional input element.
- Example: Recursive algorithms solving the Towers of Hanoi problem.

### 7. Factorial Time Complexity `O(n!)`

- The runtime grows factorially with the input size.
- Example: Generating all permutations of a set.

### Efficiency

Time complexities from most efficient (fastest growth rate) to least efficient (slowest growth rate):

`O(1)` > `O(log n)` > `O(n)` > `O(n log n)` > `O(n^2)` > `O(2^n)` > `O(n!)`

## Examples of Big O Notations

### 1. Constant Time Complexity Example `O(1)`

```js
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
```

The expression `(n * (n + 1)) / 2` involves a fixed number of operations, regardless of `n`, so it is classified as `O(1)`, because the runtime does not increase with the size of the input `n`.

### 2. Linear Time Complexity Example `O(n)`

```js
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

Here, the loop runs `n` times, and the number of operations grows linearly with `n`. This function has a time complexity of `O(n)`.

### 3. Quadratic Time Complexity Example `O(n^2)`

```js
function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; i < n; j++) {
      console.log(i, j);
    }
  }
}
```

In this example, we have a nested loop, we have an `O(n)` operation inside of an `O(n)` operation. The total number of operations grows quadratically with `n`, resulting in a time complexity of `O(n^2)`.

## Simplifying Big O Expressions

### Common Operations and Their Complexities

1. Arithmetic Operations: `O(1)`
2. Variable Assignment: `O(1)`
3. Accessing elements in an array (by index) or object (by key): `O(1)`
4. Iterating through an Array: `O(n)`
5. Nested Loops: multiply the complexities of the loops (e.g. `O(n^2)` for two nested loops)

### Ignoring Constants

Big O focuses on the growth rate, so constants are not considered significant.

- `O(500)` simplifies to `O(1)`

### Ignoring Lower-Order Terms

Only the most significant term (highest growth rate) is considered.

- `O(2n)` simplifies to `O(n)`
- `O(13n^2)` simplifies to `O(n^2)`
- `O(n + 10)` simplifies to `O(n)`
- `O(1000n + 50)` simplifies to `O(n)`
- `O(n^2 + 5n + 8)` simplifies to `O(n^2)`

## Space Complexity

**Time Complexity:** Analyzes the runtime of an algorithm as the input size increases.

**Space Complexity (Auxiliary):** Measures the amount of memory an algorithm requires to run, excluding the input size.

Note: Auxiliary space refers to the extra space used by an algorithm aside from the input data. It includes memory allocated for variables, data structures, recursion stack space, or any additional memory that is not part of the input.

### Space Complexity in JavaScript

- Most primitives (booleans, numbers, undefined, null) consume constant space, denoted as `O(1)`.
- Strings requires `O(n)` space, where `n` is the string length.
- Reference types, like arrays and objects, require `O(n)` space, where `n` is the number of elements (for arrays) or the number of keys (for objects).

### Example of Constant Space Complexity

```js
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
```

In the `sum` function, only two variables, `total` and `i`, are used regardless of the size of the input array `arr`. The space complexity remains constant, or `O(1)`, since the space required does not increase with the input size.

### Example of Linear Space Complexity

```js
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
}
```

In the `double` function, the space complexity grows proportionally with the input array `arr` because the function creates a new array `newArr` with the same number of elements as `arr`. This results in a space complexity of `O(n)`, where `n` is the length of the input array.

## Logarithmic Complexity

Logarithmic complexity, denoted as `O(log n)`, describes an algorithm where the number of operations increases logarithmically with the size of the input.

### Understanding Logarithmic Complexity

- **Binary Search:** In binary search, the search space is halved with each step. For an array of size `n`, the maximum number of steps required to find an element is proportional to `log n` (base 2), making its time complexity `O(log n)`.

- **Tree Traversals:** In balanced binary trees, operations like search, insert, and delete have a time complexity of `O(log n)` because each operation involves traversing the height of the tree, which is logarithmic relative to the number of nodes.

## Linearithmic Complexity

**Linearithmic complexity**, denoted as `O(n log n)`, describes algorithms that involve a combination of linear and logarithmic operations. This complexity often appears in efficient sorting algorithms like Merge Sort and Quick Sort.

### Understanding Linearithmic Complexity

- **Merge Sort:** This sorting algorithm divides the array into smaller subarrays, sorts them, and then merges the sorted subarrays. The dividing step is `O(log n)` (as the array is split in half each time), and the merging step is `O(n)`, leading to an overall complexity of `O(n log n)`.

- **Quick Sort:** Similar to Merge Sort, Quick Sort also achieves `O(n log n)` on average, but it has a worst-case complexity of `O(n^2)` depending on the pivot choice. However, with good pivot selection, it typically runs in `O(n log n)` time.

## Big O and Recursion

Analyzing recursive functions often involves identifying the recurrence relation, which describes how the function's runtime relates to its sub-problems. For example, a function that calls itself twice with `n/2` as the input might have a complexity of `O(n log n)`.

## Recapitulation

- To analyze the performance of an algorithm, we use Big O Notation
- Big O Notation can give us a high level understanding of the time or space complexity of an algorithm
- Big O Notation doesn't care about precision, only about general trends (linear, quadratic, constant)
- The time or space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm
- Big O Notation is everywhere, so get lots of practice

## Practical Considerations

- **Context Matters:** While Big O gives an upper bound, actual performance depends on factors like hardware, data distribution, and specific implementation details.
- **Trade-offs:** Sometimes a more complex Big O notation may be preferable due to lower constants or better practical performance on typical inputs.

## Conclusion

Big O Notation is a crucial tool in computer science and software development, offering a way to evaluate and compare the efficiency of algorithms. Understanding it enables better decision-making when designing and optimizing code, ensuring scalability and performance in real-world applications.
