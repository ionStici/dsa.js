# The Big O of Objects

**Objects:** unordered key value pairs.

```js
const user = { name: "John", hobby: "Coding" };
```

## Basic Operations on Objects

_Time Complexity:_

- **Accessing Properties:** `O(1)` - Accessing a property using the dot or bracket notation has constant time complexity. This is because JavaScript objects are implemented as hash tables, allowing direct access to properties without needing to iterate over the object.

- **Inserting/Updating Properties:** `O(1)` - Adding a new property or updating an existing one in an object also has constant time complexity. The operation involves computing the hash of the property key and storing the associated value in the appropriate slot.

- **Deleting Properties:** `O(1)` - Deleting a property from an object (`delete obj.key`) generally takes constant time.

- **Checking Property Existence:** `O(1)` - Using the `in` operator (`'key' in obj`) or the `hasOwnProperty` method (`obj.hasOwnProperty('key')`) to check if a property exists in an object is a constant time operation.

## Iterating Over Properties

- **Iterating with for...in:** `O(n)` - The `for...in` loop iterates over all enumerable properties of an object, resulting in a linear time complexity.

- **Object.keys(), Object.values(), Object.entries():** `O(n)` - The time complexity of these methods is linear, as they involves iterating over the object's properties.

## Space Complexity Considerations

- The space complexity of an object in JavaScript depends on the number of properties and the size of the data stored in those properties. Generally, the space complexity is O(n), where n is the number of properties. Each property requires memory for the key, the value, and any internal structure used to manage the property.

- For example, if an object stores n numbers as values, the space complexity for storing the values alone is O(n). If the keys are also strings of varying lengths, their storage will contribute to the overall space complexity, but it's still considered O(n) in big O notation.
