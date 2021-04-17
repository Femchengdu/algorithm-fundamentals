const sumNumInArrray = (array) => {
  let sum = 0; // runs once
  for (const val of array) {
    // setup runs once

    sum += val; // runs array.length => n times
  }
  return sum; // runs once
};
/**
 *
 * The time complexity of the is function can be calculated as:
 * T = 1 + 1 + n + 1 = 3 + n = 3 + 1 * n
 * T = 1 * n
 * T = n => O(n) => Linear Time Complexity
 */
console.log(sumNumInArrray([1, 2, 3]));
