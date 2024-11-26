// function setTimeoutPromisified (ms) {
//     let p=new Promise(resolve=>setTimeout(resolve,ms));
//     return p;
// }

// function callback(){
//      console.log("3 second have passed in Js")
// }
// setTimeoutPromisified(4000).then(callback)


// function waitfro4sec(resolve){
//     setTimeout(resolve,3000);
// }
// function main(){
//     console.log("main funtion is called")
// }
// waitfro4sec(main);


// function rrdom(){
// function doasyncop(resolve){
//     setTimeout(resolve,3000);
// }
// const p= new Promise(doasyncop);

// function callback(){
//     console.log("3 second have passed");
// }
// p.then(callback);


//      promisified version of callback function

// setTimeoutPromisified(1000)
//   .then(function () {
//     console.log("hi");
//     return setTimeoutPromisified(3000);
//   })
//   .then(function () {
//     console.log("hello");
//     return setTimeoutPromisified(5000);
//   })
//   .then(function () {
//     console.log("hello there");
//   });


//     async await promises

/*function setTimeoutPromisified(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}
async function solve() {
    await setTimeoutPromisified(1000);
    console.log("hii");
    await setTimeoutPromisified(3000);
    console.log("hello");
    await setTimeoutPromisified(5000);
    console.log("hi there");
}
solve();
*/

//         defining own async function 

// // promisified approach
// const { promises } = require("dns");
// const fs = require("fs");
// function cleanFile(filePath, cb) {
//   return new Promise(function (resolve) {
//     fs.readFile(filePath, "utf-8", function (err, data) {
//       data = data.trim();
//       fs.writeFile(filePath, data, function () {
//         resolve();
//       });
//     });
//   });
// }

// async function main() {
//   await cleanFile("a.txt");
//   console.log("Done cleaning file");
// }
// main();



// err first callback vs reject in promises
// 1---> callback

// const fs = require("fs")
// function afterDone(err, data) {
//   if (err) {
//     console.log("Error while reading file");
//   } else {
//     console.log(data)
//   }
// }

// fs.readFile("a.txt", "utf-8", afterDone);

//2----> promises

const fs = require("fs");

function readFilePromisified(filePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filePath, "utf-8", function (err, data) {
      if (err) {
        reject("Error while reading file");
      } else {
        resolve(data);
      }
    });
  });
}

function onDone(data) {
  console.log(data);
}

function onError(err) {
  console.log("Error: " + err);
}

readFilePromisified("a.txt").then(onDone).catch(onError);
