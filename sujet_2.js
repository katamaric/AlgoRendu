let list1 = [3, 7, 8, 3, 6, 1];
let list2 = [1, 4, 5, 8];

function exo2(buildings) {
  let count = 0;
  for (let i = 0; i < buildings.length; i++) {
    let hasWesternView = true;
    for (let j = i + 1; j < buildings.length; j++) {
      if (buildings[i] <= buildings[j]) {
        hasWesternView = false;
        break;
      }
    }
    if (hasWesternView) {
      count++;
    }
  }
  return count;
}

function exo4(buildings) {
  let count = 1;
  for (let i = 0; i < buildings.length - 1; i++) {
    if (buildings[i] > buildings[i + 1]) {
      count++;
    }
  }
  return count;
}

function exo6(buildings, n = 0, count = 1) {
  if (n >= buildings.length) {
    return count;
  } else {
    if (buildings[n] > buildings[n + 1]) {
      return exo6(buildings, (n += 1), (count += 1));
    } else {
      return exo6(buildings, (n += 1), (count = count));
    }
  }
}

console.log(exo6(list2));
