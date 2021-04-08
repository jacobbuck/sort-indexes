const defaultComparator = (a, b) => 
  ((a = `${a}`) < (b = `${b}`) ? -1 : a > b ? 1 : 0);

const sortIndexes = (arr, comparator = defaultComparator) =>
  arr
    .map((v, i) => ({ i, v }))
    .sort((a, b) => comparator(a.v, b.v))
    .map(({ i }) => i);

export default sortIndexes;
