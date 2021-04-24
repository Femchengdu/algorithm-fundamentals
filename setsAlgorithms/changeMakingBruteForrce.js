function computeChange(availableCoins, targetAmount) {
  let remainingAmount = targetAmount;

  const calculatedChange = {
    selectedCoins: {},
    numberOfCoins: 0,
  };
  for (const coin of availableCoins) {
    const coinCount = Math.floor(remainingAmount / coin);
    calculatedChange[coin] = coinCount;
    calculatedChange.numberOfCoins += coinCount;
    remainingAmount = remainingAmount - coin * coinCount;
  }
  return calculatedChange;
}

function computeChangeBruteForce(availableCoins, targetAmount) {
  const results = [];
  for (let i = 0; i < availableCoins.length; i++) {
    results.push(computeChange(availableCoins.slice(i), targetAmount));
  }
  console.log("test ;", results);
  let smallestNumberOfCoins = Number.MAX_SAFE_INTEGER;
  let finalResult;
  for (const result of results) {
    if (result.numberOfCoins < smallestNumberOfCoins) {
      smallestNumberOfCoins = result.numberOfCoins;
      finalResult = result;
    }
  }
  return finalResult;
}
const availableCoins = [8, 6, 5, 1];
const targetAmount = 66;

console.log(computeChangeBruteForce(availableCoins, targetAmount));
