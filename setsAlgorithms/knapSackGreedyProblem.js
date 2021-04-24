function knapSack(items, maxCap, itemIndex, memo) {
  const sackResult = { items: [], value: 0, weight: 0 };

  let remainingCapacity = maxCap;
  for (const item of items) {
    if (item.weight <= remainingCapacity) {
      sackResult.items.push(item);
      sackResult.value += item.value;
      sackResult.weight += item.weight;
      remainingCapacity -= item.weight;
    }
  }
  return sackResult;
}

const items = [
  { name: "a", value: 3, weight: 3 },
  { name: "b", value: 6, weight: 8 },
  { name: "c", value: 10, weight: 3 },
];

const maxCap = 8;

const sack = knapSack(items, maxCap, items.length - 1);
console.log(sack);
