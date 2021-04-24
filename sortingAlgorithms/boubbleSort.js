function bubbleSort(array) {
  const resultArray = [...array];
  for (let outer = 0; outer < resultArray.length; outer++) {
    let outerEl = resultArray[outer];
    for (let inner = outer + 1; inner < resultArray.length; inner++) {
      let innerEl = resultArray[inner];

      // ASC sort
      if (outerEl > innerEl) {
        resultArray[outer] = innerEl;
        resultArray[inner] = outerEl;
        // swap references too.
        outerEl = resultArray[outer];
        innerEl = resultArray[inner];
      }
    }
  }
  return resultArray;
}

bubbleSort([5, 10, -3, -10, 1, 100, 99]);
