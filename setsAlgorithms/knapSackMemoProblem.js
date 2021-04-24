function knapSack(items, maxCap, itemIndex, memo) {
  //debugger;
  if (memo[maxCap][itemIndex]) {
    return memo[maxCap][itemIndex];
  }
  // exit case
  if (maxCap === 0 || itemIndex < 0) {
    return { items: [], value: 0, weight: 0 };
  }
  if (maxCap < items[itemIndex].weight) {
    return knapSack(items, maxCap, itemIndex - 1, memo);
  }

  const sackWithItem = knapSack(
    items,
    maxCap - items[itemIndex].weight,
    itemIndex - 1,
    memo
  );
  const sackWithoutItem = knapSack(items, maxCap, itemIndex - 1, memo);

  const valueWithItem = sackWithItem.value + items[itemIndex].value;
  const valueWithoutItem = sackWithoutItem.value;
  let resultSack;
  if (valueWithItem > valueWithoutItem) {
    const updatedSack = {
      items: sackWithItem.items.concat(items[itemIndex]),
      value: sackWithItem.value + items[itemIndex].value,
      weight: sackWithItem.weight + items[itemIndex].weight,
    };
    resultSack = updatedSack;
  } else {
    resultSack = sackWithoutItem;
  }
  memo[maxCap][itemIndex] = resultSack;
  return resultSack;
}

function knapSackWrapper(items, maxCap, index) {
  const knapSackMemo = Array.from(Array(maxCap + 1), () =>
    Array(items.length).fill(undefined)
  );

  return knapSack(items, maxCap, index, knapSackMemo);
}

const items = [
  { name: "a", value: 3, weight: 3 },
  { name: "b", value: 6, weight: 8 },
  { name: "c", value: 10, weight: 3 },
];

const maxCap = 8;

const sack = knapSackWrapper(items, maxCap, items.length - 1);
console.log(sack);
