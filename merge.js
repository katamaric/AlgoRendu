const fs = require("fs");
const fileName = process.argv[2];

var input = fs.readFileSync(fileName, "utf8").toString("utf-8");
console.log(input);
arrInput = input.split("\n").map(Number);
console.log(arrInput);

function mergeSort(arrInput) {
  if (arrInput.length < 2) {
    return arrInput;
  }
  let mid = Math.floor(arrInput.length / 2);
  let sortedLeftArray = mergeSort(arrInput.slice(0, mid));
  let sortedRightArray = mergeSort(arrInput.slice(mid, arrInput.length));
  return merge(sortedLeftArray, sortedRightArray);
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return [...result, ...left, ...right];
}

console.log(mergeSort(arrInput));
