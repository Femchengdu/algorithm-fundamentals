function cartesianProduct(setA, setB) {
  const product = [];

  for (let setAEl of setA) {
    if (!Array.isArray(setAEl)) {
      setAEl = [setAEl];
    }
    for (const setBEl of setB) {
      //
      product.push([...setAEl, setBEl]);
    }
  }

  return product;
}

// Generalizing the catesian product fn

function cartesian(...sets) {
  let tempProduct = sets[0];
  debugger;
  for (let i = 1; i < sets.length; i++) {
    tempProduct = cartesianProduct(tempProduct, sets[i]);
  }
  return tempProduct;
}

const colors = ["blue", "red"];
const sizes = ["m", "l", "xl"];
const styles = ["round neck", "v neck"];

console.log(cartesian(colors, sizes, styles));
