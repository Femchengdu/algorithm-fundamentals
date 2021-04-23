const tree = {
  val: 1,
  children: [
    { val: 2 },
    {
      val: 3,
      children: [
        {
          val: 4,
          children: [{ val: 5 }, { val: 6 }, { val: 7 }],
        },
      ],
    },
  ],
};

const prioritizeNodes = (tree, targetVal) => {
  const dfs = (tree, visited = new Set()) => {
    visited.add(tree.val);

    if (tree.children) {
      for (const child of tree.children) {
        if (child.val === targetVal) {
          console.log(
            "Found targetValue in :",
            child,
            "For visited :",
            visited
          );
          return;
        }

        if (!visited.has(JSON.stringify(child))) {
          dfs(child, visited);
        }
      }
    }
  };
  const swap = (array, targetIndex, destinationIndex) => {
    let temp = array[destinationIndex];
    array[destinationIndex] = array[targetIndex];
    array[targetIndex] = temp;
    return array;
  };
  console.log("Tree :", tree.val, targetVal);
  // Call the dfs here
  if (tree.children && tree.children.some((child) => child.val === targetVal)) {
    console.log("Contains target val, do some sorting on :", tree);
    // Shift the value of the targetValu
    const targetIndex = tree.children.findIndex(
      (item) => item.val === targetVal
    );
    if (targetIndex) {
      // Swapping and preserving the order of the other elements
      let swapedArray;
      for (let i = targetIndex; i >= 1; i--) {
        // if there are more than one target item, this does not need to replace it
        swapedArray = swap(tree.children, i, i - 1);
      }
      // set the value on the Tree
      tree.children = swapedArray;
    }
    tree.children.forEach((child) => {
      prioritizeNodes(child, targetVal);
    });
  } else if (
    tree.children &&
    !tree.children.some((child) => child.val === targetVal)
  ) {
    // using the children array, for each child
    console.log("Does not contain target val, maybe go deeper");
    dfs(tree);
    tree.children.forEach((child) => {
      prioritizeNodes(child, targetVal);
    });
  }
};

prioritizeNodes(tree, 7);
