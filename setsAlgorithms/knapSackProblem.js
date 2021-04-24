function knapSack(items, maxCap, itemIndex) {
  // exit case
  if (maxCap === 0 || itemIndex < 0) {
    return { items: [], value: 0, weight: 0 };
  }
  if (maxCap < items[itemIndex].weight) {
    return knapSack(items, maxCap, itemIndex - 1);
  }

  const sackWithItem = knapSack(
    items,
    maxCap - items[itemIndex].weight,
    itemIndex - 1
  );
  const sackWithoutItem = knapSack(items, maxCap, itemIndex - 1);

  const valueWithItem = sackWithItem.value + items[itemIndex].value;
  const valueWithoutItem = sackWithoutItem.value;

  if (valueWithItem > valueWithoutItem) {
    const updatedSack = {
      items: sackWithItem.items.concat(items[itemIndex]),
      value: sackWithItem.value + items[itemIndex].value,
      weight: sackWithItem.weight + items[itemIndex].weight,
    };
    return updatedSack;
  } else {
    return sackWithoutItem;
  }
}

const items = [
  { name: "a", value: 3, weight: 3 },
  { name: "b", value: 6, weight: 8 },
  { name: "c", value: 10, weight: 3 },
];

const maxCap = 8;

const sack = knapSack(items, maxCap, items.length - 1);
console.log(sack);
