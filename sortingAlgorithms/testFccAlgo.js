function updateInventory(curInv, newInv) {
  const updateInventory = [...curInv];

  for (const newProd of newInv) {
    const oldProdIndex = updateInventory.findIndex(
      (oldProd) => oldProd[1] === newProd[1]
    );
    if (oldProdIndex === -1) {
      // product does not exist, add new product to the updated inventory
      updateInventory.push(newProd);
    } else {
      const toUpdateProd = [...updateInventory[oldProdIndex]];
      const updateQuantity = toUpdateProd[0] + newProd[0];
      updateInventory[oldProdIndex][0] = updateQuantity;
    }
    console.log("New inventory key :", newProd[1], newProd[0], updateInventory);
  }
  return updateInventory.sort((a, b) => {
    if (a[1] < b[1]) {
      return -1;
    }
    if (a[1] > b[1]) {
      return 1;
    }
    // a must be equal to b
    return 0;
  });
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

updateInventory(curInv, newInv);
