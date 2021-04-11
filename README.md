# sort-indexes

Sorts the elements of an array and returns a new array with the indexes of the elements from the original array in sorted order.

## Usage

```js
sortIndexes(array[, comparator])
```

### Parameters

- `array` the array to sort.
- `comparator` (optional) function that defines the sort order.
  If omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value.
  - `firstEl` The first element for comparison.
  - `secondEl` The second element for comparison.

### Return value

A new array containing the indexes of `array` in the sorted order.

## Examples

```js
import sortIndexes from 'sort-indexes';

sortIndexes(['c', 'a', 'b']); // -> [2, 0, 1]

sortIndexes([5, 1, 3, 4, 2], (a, b) => b - a); // -> [0, 3, 2, 4, 1]
```
