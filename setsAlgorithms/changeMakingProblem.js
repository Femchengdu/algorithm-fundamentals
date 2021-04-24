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

const availableCoins = [100, 50, 20, 10, 5, 2, 1];
const targetAmount = 66;

const change = computeChange(availableCoins, targetAmount);
console.log(change);
