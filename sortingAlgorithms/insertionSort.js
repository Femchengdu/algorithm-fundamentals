function insertionSort(array) {
  const copiedArray = [...array];
  // Only change code below this line
  for (let i = 1; i < copiedArray.length; i++) {
    let outerElement = copiedArray[i];
    let replaceElementIndex;
    for (let j = i - 1; j >= 0; j--) {
      let innerElement = copiedArray[j];
      if (outerElement < innerElement) {
        // set the index
        replaceElementIndex = j;
      }
    }
    if (replaceElementIndex) {
      copiedArray.splice(i, 1);
      // insert at the temp index
      copiedArray.splice(replaceElementIndex, 0, outerElement);
    }
  }
  return copiedArray;
  // Only change code above this line
}

console.log(
  insertionSort([
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
  ])
);
