class HashTable {
  // Collision avoidance using chaining
  constructor() {
    this.size = 10;
    this.buckets = Array(10)
      .fill(null)
      .map(() => []);
  }

  hash(key) {
    let hash = 0;
    for (const char of key) {
      hash += char.charCodeAt(0);
    }
    const calHash = hash % this.size;
    //console.log(calHash, hash);
    return calHash;
  }

  set(key, value) {
    const keyHash = this.hash(key);
    const bucketArrray = this.buckets[keyHash];
    const storedElement = bucketArrray.find((element) => {
      return element.key === key;
    });
    if (storedElement) {
      storedElement.val = value;
    } else {
      bucketArrray.push({ key: key, val: value });
    }
  }

  get(key) {
    const keyHash = this.hash(key);
    const bucketArrray = this.buckets[keyHash];
    const storedElement = bucketArrray.find((element) => {
      return element.key === key;
    });
    return storedElement;
  }

  showInfo() {
    for (const key in this.buckets) {
      if (this.buckets[key] !== null) {
        console.log(key, this.buckets[key]);
      }
    }
  }
}

const table = new HashTable();
const word = "hello";

// function findFirstRep(str) {
//   const table = new HashTable();
//   for (const char of str) {
//     if (table.get(char)) {
//       return char;
//     }
//     table.set(char, 1);
//   }
// }

for (const char of "hello") {
  table.set(char, char);
}

for (const char of "ledger") {
  table.set(char, char);
}

for (const char of "maybe") {
  table.set(char, char);
}
console.log("Is this :", table.showInfo());
