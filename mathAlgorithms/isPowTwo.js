function isPowTwo(number) {
  if (number < 1) {
    return false;
  }
  let dividedNumber = number;
  while (dividedNumber !== 1) {
    console.log("Executing.....");
    if (dividedNumber % 2 !== 0) {
      return false;
    }
    dividedNumber = dividedNumber / 2;
  }
  return true;
}

// Best Case: number 13 => 0(1)
// Average Case: O(log n)
// Worst Case: 1125899906842624 => O(log n)
isPowTwo(3);
isPowTwo(999999);
isPowTwo(8);
isPowTwo(16);
isPowTwo(1000000);
isPowTwo(1125899906842624);
