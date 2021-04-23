function fib(n) {
  const numbers = [1, 1]; // 1
  for (let i = 2; i < n + 1; i++) {
    // 1
    numbers.push(numbers[i - 2] + numbers[i - 1]); // n - 1
  }
  return numbers[n]; // 1
}

// T = 1 + 1 + 1 + n - 1 => 2 + n => n => O(n)
console.log(fib(4));
console.log(fib(5));
