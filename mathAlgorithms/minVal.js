function minVal(array) {
  let minVal = array[0]; // 1
  for (let i = 0; i < array.length; i++) {
    // 1
    let curVal = array[i]; // 1
    if (curVal <= minVal) {
      // 1
      minVal = curVal; // 1
    }
  }
  return minVal; //1
}
// T = 1 + 1 + 1 + 3n => 3 + 3n => O(n)
console.log(minVal([9, 3, 4, 6, 26, 0]));
console.log(minVal([9999, 333, 4, 6, 26, 1]));
