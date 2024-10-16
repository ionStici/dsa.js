# Recursion

## Definition

- **Recursion:** A process (function) that calls itself.

- Each function call adds a new frame on the **call stack**.

- **Base Case:** The condition when the recursion ends.

- **Stack Overflow** happens when the recursion isn't stopping.

- Each recursive iteration must receive **different inputs**.

## Recursive Factorial

```
# Factorial
5! = 5 * 4 * 3 * 2 * 1 = 120
```

```js
// recursive function
function factorial(num) {
  if (num < 1) return 1; // base case
  return num * factorial(num - 1); // different input
}
factorial(5); // 120
```
