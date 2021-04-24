function quickSort(array) {
  const copiedArray = [...array];
  // exit step

  if (copiedArray.length <= 1) {
    return copiedArray;
  }

  const smallerElArray = [];
  const biggerElArray = [];
  const pivotEl = copiedArray.shift();
  const pivotElArray = [pivotEl];

  while (copiedArray.length) {
    const currentElement = copiedArray.shift();
    if (currentElement === pivotEl) {
      pivotElArray.push(currentElement);
    } else if (currentElement < pivotEl) {
      smallerElArray.push(currentElement);
    } else if (currentElement > pivotEl) {
      biggerElArray.push(currentElement);
    }
  }

  const smallerElSortedArray = quickSort(smallerElArray);
  const biggerElSortedArray = quickSort(biggerElArray);

  return smallerElSortedArray.concat(pivotElArray, biggerElSortedArray);
}

const sortedArray = quickSort([-3, 10, 1, 100, -10, 22, 15]);
console.log(sortedArray);
