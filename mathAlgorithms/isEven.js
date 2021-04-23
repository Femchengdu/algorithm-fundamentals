function isEven(number) {
  if (number % 2 === 0) {
    // 1
    return true; // 1
  }
  return false; // 1
}
// T = 1 + 1 + 1 => 3 => O(1)
console.log(isEven(3));
console.log(isEven(7));
