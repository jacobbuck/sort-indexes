# sort-indexes

Sorts the elements of an array and returns the indexes in sorted order.

## Usage

```js
import sortIndexes from 'sort-indexes'

sortIndexes(['foo', 'bar', 'oxo'])
// returns [1, 0, 2]

sortIndexes([5, 1, 3, 4, 2], (a, b) => b - a)
// returns [0, 3, 2, 4, 1]
```
