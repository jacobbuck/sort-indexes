const defaultComparator = (a, b) => 
  ((a = `${a}`) < (b = `${b}`) ? -1 : a > b ? 1 : 0);

const sortIndexes = (array, comparator = defaultComparator) =>
  array
    .map((value, index) => [index, value])
    .sort(([,a], [,b]) => comparator(a, b))
    .map(([index]) => index);

export default sortIndexes;
