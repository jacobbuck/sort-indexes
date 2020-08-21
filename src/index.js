const defaultComparitor = (a, b) => (a < b ? -1 : a > b ? 1 : 0);

const sortIndexes = (array, comparitor = defaultComparitor) =>
  array
    .map((v, i) => ({ i, v }))
    .sort((a, b) => comparitor(a.v, b.v))
    .map(({ i }) => i);

export default sortIndexes;
