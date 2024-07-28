## The Big O of Arrays

**Arrays:** ordered lists.

```js
const arr = [10, [], true, {}, undefined];
```

### Basic Operations on Arrays

_Time Complexity:_

- **Accessing Elements:** `O(1)` - Accessing an element by its index in an array is a constant time operation.

- **Inserting/Removing Elements at the End:** `O(1)` - Adding (`push`) or removing (`pop`) an element at the end of an array takes constant time, because it only involves updating the length and adding or removing an element.

- **Inserting/Removing Elements at the Beginning:** `O(n)` - Adding (`unshift`) or removing (`shift`) an element at the beginning of an array takes linear time because all subsequent elements need to be re-indexed.

- **Inserting and Removing Elements (Arbitrary Position):** `O(n)` - Inserting or removing elements at arbitrary positions involves shifting elements to make space or fill gaps.

- **Iterating Over Elements:** `O(n)` - Iterating over all elements, whether using a `for` loop, `forEach`, or other iteration methods, requires linear time.
