# sort-indexes

Sorts the elements of an array and returns a new array with the indexes from the original array in sorted order.

## Usage

```js
sortIndexes(arr[, comparator])
```

### Parameters

- `arr` array to sort.
- `comparator` (optional) function that defines the sort order.

### Return value

A new array containing the indexes of `arr` in the sorted order.

## Examples

```js
import sortIndexes from 'sort-indexes';

sortIndexes(['foo', 'bar', 'oxo']);
// returns [1, 0, 2]

sortIndexes([5, 1, 3, 4, 2], (a, b) => b - a);
// returns [0, 3, 2, 4, 1]
```
