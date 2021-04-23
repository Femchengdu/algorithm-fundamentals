function linearSearch(array, element, compareFn) {
  let index = 0;
  for (const item of array) {
    if (
      typeof element === "object" &&
      element !== null &&
      compareFn(element, item)
    ) {
      return index;
    }
    if (item === element) {
      return index;
    }
    index++;
  }
}

console.log(linearSearch([5, 3, 10, -10, 33, 51], 10));
