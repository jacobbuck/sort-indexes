'use strict';

function defaultCompare(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}

module.exports = function sortIndexes(array, compare) {
  compare = compare || defaultCompare;

  var length = array.length;
  var result = Array(length);
  var i1 = -1;
  var i2 = -1;

  while (++i1 < length) {
    result[i1] = { i: i1, v: array[i1] };
  }

  result.sort(function(a, b) {
    return compare.call(array, a.v, b.v);
  });

  while (++i2 < length) {
    result[i2] = result[i2].i;
  }

  return result;
};
