var expect = require('expect');
var sortIndexes = require('./');

describe('sort-indexes', function() {
  it('sorts an array', function() {
    expect(sortIndexes(['foo', 'bar', 'oxo'])).toEqual([1, 0, 2]);
  });

  it('sorts an array with a compare function', function() {
    expect(sortIndexes([5, 1, 3, 4, 2], function(a, b) { return b - a; }))
      .toEqual([0, 3, 2, 4, 1]);
  });
});
