function isPrime(number) {
  for (let i = 2; i < number; i++) {
    // 1
    if (number % i === 0) {
      // n -2
      return false; // n -2
    }
  }
  return true;
  1;
}

// T = 1 + 1 + 2(n - 2) => 2n - 2 => 2n => O(n)

console.log(isPrime(5));
console.log(isPrime(9));
