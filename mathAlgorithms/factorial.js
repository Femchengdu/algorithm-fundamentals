function fact(number) {
  let fact = 1;
  for (let i = number; i >= 1; i--) {
    fact = fact * i;
  }
  return fact;
}

console.log(fact(3));
console.log(fact(5));
