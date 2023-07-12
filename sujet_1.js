let arr = [10, 15, 3, 7];
let k = 17;
let l = 1;

function exo1(arr, result) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === result) {
        return true;
      }
    }
    return false;
  }
}

function exo3(arr, result) {
  const numSet = new Set();
  for (let num of arr) {
    const complement = result - num;
    if (numSet.has(complement)) {
      return true;
    }
    numSet.add(num);
  }
  return false;
}

function exo5(arr, result, n = 0) {
  if (n >= arr.length) {
    return false;
  } else {
    target = result - arr[n];
    if (arr.find((num) => num === target)) {
      return true;
    }
    return exo5(arr, result, (n += 1));
  }
}

console.log(exo5(arr, l));

/* FOR REF, RECURSIVE FUNCTION USING SET()

function algoRecursive(arr, target, index = 0, numSet = new Set()) {
  if (index >= arr.length) {
    return false; // Reached the end of the array, no pair found
  }

  const complement = target - arr[index];
  if (numSet.has(complement)) {
    return true; // Found a pair that adds up to the target
  }

  numSet.add(arr[index]);

  return algoRecursive(arr, target, index + 1, numSet);
}

*/
