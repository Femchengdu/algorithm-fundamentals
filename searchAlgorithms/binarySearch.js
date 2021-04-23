function binarysSearch(array, element) {
  let startIndex = 0;
  let endIndex = array.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    if (array[middleIndex] === element) {
      return middleIndex;
    }
    if (array[middleIndex] < element) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }
}

console.log(binarysSearch([-10, 3, 5, 10, 33, 51], 3));
