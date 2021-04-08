import sortIndexes from '..';

it('sorts an array', () => {
  expect(sortIndexes(['foo', 'bar', 'oxo'])).toEqual([1, 0, 2]);
});

it('sorts an array with a comparator function', () => {
  const comparator = (a, b) => b - a;
  expect(sortIndexes([5, 1, 3, 4, 2], comparator)).toEqual([0, 3, 2, 4, 1]);
});
