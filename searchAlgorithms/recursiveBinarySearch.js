function recursiveBinarySearch(array, element, offset) {
  let startIndex = 0;
  let endIndex = array.length - 1;
  const middleIndex = Math.floor((endIndex - startIndex) / 2);
  if (array[middleIndex] === element) {
    return middleIndex + offset;
  }
  //debugger;
  if (array[middleIndex] < element) {
    startIndex = middleIndex + 1;
    offset = offset + middleIndex + 1;
  } else {
    endIndex = middleIndex;
  }
  return recursiveBinarySearch(
    array.slice(startIndex, endIndex + 1),
    element,
    offset
  );
}

console.log(recursiveBinarySearch([-10, 3, 5, 10, 33, 51], 51, 0));
