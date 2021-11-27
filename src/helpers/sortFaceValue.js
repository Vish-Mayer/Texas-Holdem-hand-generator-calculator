export const sortFaceValues = counts => {
  let sortable = [];
  let sortedValue = [];

  for (let i in counts) {
    sortable.push([i, counts[i]]);
  }

  sortable.sort(function(a, b) {
    let countDiff = b[1] - a[1];
    if (countDiff) return countDiff;
    return b > a ? -1 : b === a ? 0 : 1;
  });

  for (let i in sortable) {
    let count = sortable[i][1];
    while (count > 0) {
      sortedValue.push(sortable[i][0]);
      count--;
    }
  }
  return sortedValue.join("");
};
