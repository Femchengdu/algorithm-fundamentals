function permAlone(str) {
  const permutationsArray = [];
  const tempStrArr = str.split(""); // ['a', 'a', 'b']

  const buildStr = (str1, str2) => str1 + str2;
  const remArrayFromIndex = (index, array) =>
    array.filter((_, idx) => idx !== index);

  const hasRepeatConsecChar = (string) => {
    let hasRepeatCharacter = false;
    if (string.length > 2) {
      for (let i = 1; i < string.length; i++) {
        let prevChar = string[i - 1];
        let currChar = string[i];

        if (currChar === prevChar) {
          hasRepeatCharacter = true;
        }
      }
    }

    return hasRepeatCharacter;
  };

  const recursiveFn = (string, array) => {
    // start can be an empty string
    console.log("Running in recursiveFn!!!");
    if (array.length === 1) {
      const exitVal = buildStr(string, array[0]);
      //debugger;
      if (!hasRepeatConsecChar(exitVal)) {
        permutationsArray.push(exitVal);
      }
      return;
    }

    for (let i = 0; i < array.length; i++) {
      let currentString = buildStr(string, array[i]);
      recursiveFn(currentString, remArrayFromIndex(i, array));
    }
  };
  recursiveFn("", tempStrArr);
  console.log("permutations array :", permutationsArray);
  return permutationsArray.length;
}

permAlone("aab");
