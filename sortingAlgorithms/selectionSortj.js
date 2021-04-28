function selectionSort(array) {
  const copiedArray = [...array];
  let currentMinVal = Number.MAX_SAFE_INTEGER;
  let currentMinIdx;
  for (let outer = 0; outer < copiedArray.length - 1; outer++) {
    let currentOuter = copiedArray[outer];
    for (let inner = outer; inner < copiedArray.length; inner++) {
      let currentInner = copiedArray[inner];
      if (currentInner < currentMinVal) {
        currentMinVal = currentInner;
        currentMinIdx = inner;
      }
    }
    if (currentMinVal < currentOuter) {
      copiedArray[outer] = copiedArray[currentMinIdx];
      copiedArray[currentMinIdx] = currentOuter;
    }
    debugger;
    // Reset the currentMinValue
    currentMinVal = Number.MAX_SAFE_INTEGER;
  }
  return copiedArray;
  // Only change code above this line
}

selectionSort([
  1,
  4,
  2,
  8,
  345,
  123,
  43,
  32,
  5643,
  63,
  123,
  43,
  2,
  55,
  1,
  234,
  92,
]);
