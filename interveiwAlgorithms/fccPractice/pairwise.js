function pairwise(arr, arg) {
  const resultsHash = {};
  const makeStringFromVals = (val1, val2) =>
    val1 < val2 ? val1 + "-" + val2 : val2 + "-" + val1;
  const getResultsValuesSum = (resultsHash) => {
    const valuesArr = Object.values(resultsHash);
    const valSum = valuesArr.reduce((val, sum) => sum + val, 0);
    return valSum;
  };

  const allValuesEqual = (arr) => {
    const firstVal = arr[0];
    return arr.every((val) => val === firstVal);
  };

  let usedOuterIndex = [];
  let usedInnerIndex = [];
  if (allValuesEqual(arr)) {
    const v1 = arr[0];
    const v2 = arr[1];
    if (v1 + v2 === arg) {
      const valueStr = makeStringFromVals(v1, v2);
      resultsHash[valueStr] = 1;
    }
  } else {
    for (let i = 0; i < arr.length - 1; i++) {
      let currentOuterVal = arr[i];
      for (let j = i + 1; j < arr.length; j++) {
        let currentInnerVal = arr[j];

        if (currentOuterVal + currentInnerVal === arg) {
          let indexSum = i + j;

          const valueStr = makeStringFromVals(i, j);

          if (!usedOuterIndex.includes(i) && !usedInnerIndex.includes(j)) {
            console.log("Matching args for ", valueStr, indexSum);
            if (valueStr in resultsHash) {
              const storedIdxSum = resultsHash[valueStr];
              if (storedIdxSum > indexSum) {
                resultsHash[valueStr] = indexSum;
              }
            } else {
              resultsHash[valueStr] = indexSum;
              usedOuterIndex.push(i);
              usedInnerIndex.push(j);
            }
          }
        }
      }
    }
  }

  console.log("Check results :", resultsHash);
  return getResultsValuesSum(resultsHash);
}

console.log("the expected result is :", pairwise([1, 1, 1], 2));
