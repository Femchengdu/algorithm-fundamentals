let fnCounter = 0;
function fib(n, memo = {}) {
  fnCounter++;
  let result;
  //debugger;
  if (memo[n]) {
    return memo[n];
  }
  if (n == 0 || n == 1) {
    result = 1;
  } else {
    result = fib(n - 1, memo) + fib(n - 2, memo); // Expo growth
  }
  memo[n] = result;
  return result;
}

// T  => O(2^n)
console.log(fib(4));
console.log("counter 4:", fnCounter);
fnCounter = 0;

console.log(fib(5));
console.log("counter 5:", fnCounter);
fnCounter = 0;

// console.log(fib(6));
// console.log("counter 5:", fnCounter);
// fnCounter = 0;

// console.log(fib(25));
// console.log("counter 25:", fnCounter);
// fnCounter = 0;

// console.log(fib(55));
// console.log("counter 55:", fnCounter);
// fnCounter = 0;
