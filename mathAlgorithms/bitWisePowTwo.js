function bitWisePowTwo(number) {
  if (number < 1) {
    return false;
  }
  return (number & (number - 1)) === 0;
}

// T = O(1)

console.log(bitWisePowTwo(8), 8);
console.log(bitWisePowTwo(6), 6);
console.log(bitWisePowTwo(7), 7);
console.log(bitWisePowTwo(16), 16);
