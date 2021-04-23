function factRecursion(number) {
  if (number === 1) {
    // 1
    return 1; // 1
  }
  return number * factRecursion(number - 1); // n function calls
}

//T = n * O(1) => O(n)
console.log(factRecursion(3));
console.log(factRecursion(5));
