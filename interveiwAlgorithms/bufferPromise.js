function loadRemote(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Resolved for ${url}`);
    }, 5000);
  });
}

function bufferPromise(promiseFactoryFn, maxActive = 4) {
  let requestedPromiseCounter = 0;
  const promiseBuffer = [];

  return (...args) =>
    new Promise((resolve, reject) => {
      if (requestedPromiseCounter < maxActive) {
        requestedPromiseCounter += 1;
        return resolve(promiseFactoryFn(...args));
      } else {
        return reject(...args);
      }
    })
      .then((result) => {
        console.log("Result in the then block :", result);
        if (promiseBuffer.length > 0) {
          const currentArg = promiseBuffer.shift();
          return promiseFactoryFn(currentArg).then((result2) => {
            requestedPromiseCounter += 1;
            console.log(
              "Result2 in the 2nd then block :",
              result2,
              "promiseBufferLength :",
              promiseBuffer.length
            );
            console.log(
              "Promise buffer in the 2nd then block :",
              promiseBuffer,
              maxActive
            );
          });
        }
      })
      .catch((err) => {
        console.log("Args received in the catch block :", err);
        promiseBuffer.push(err);
        console.log("Promise buffer in catch block :", promiseBuffer);
      });
}

const requestedUrls = [
  "http://freenovation.com/1",
  "http://freenovation.com/2",
  "http://freenovation.com/3",
  "http://freenovation.com/4",
  "http://freenovation.com/5",
  "http://freenovation.com/6",
  "http://freenovation.com/7",
];

// your function is bufferPromise
let bufferedLoadRemote = bufferPromise(loadRemote, 3);
requestedUrls.map(bufferedLoadRemote);
