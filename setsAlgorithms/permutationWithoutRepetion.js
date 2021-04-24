function permWithoutReps(listItems) {
  const permutations = [];
  if (listItems.length === 1) {
    return [listItems];
  }

  const partialPermutations = permWithoutReps(listItems.slice(1));

  //

  const firstOption = listItems[0];
  for (let i = 0; i < partialPermutations.length; i++) {
    const partPermutation = partialPermutations[i];
    for (let j = 0; j <= partPermutation.length; j++) {
      const frontPerm = partPermutation.slice(0, j);
      const backPerm = partPermutation.slice(j);
      permutations.push(frontPerm.concat([firstOption], backPerm));
    }
  }
  return permutations;
}

const todoListItems = [
  "order food",
  "walk the dog",
  "buy groceries",
  "order food",
];

console.log(permWithoutReps(todoListItems));
