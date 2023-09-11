// Check weather second array contains square with same frequency
//eg : same([1,2,3] [4,9,1]) true

// brute force
// TC: O(n2)
const same = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }
  let result = false;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (b[j] === a[i] ** 2) {
        result = true;
        b.splice(j, 1);
        break;
      } else {
        result = false;
        if (j === b.length - 1) return false;
      }
    }
  }
  return result;
};
console.log(same([1, 2, 1], [4, 1, 1]));

//brute force

const same1 = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i] ** 2) === -1) return false;
    b.splice(b.indexOf(a[i] ** 2), 1);
  }
  return true;
};
console.log(same1([1, 2, 3], [1, 9, 1]));

// Optimized
// TC : O(n)

const same2 = (a, b) => {
  let obj = {};
  for (let i = 0; i < a.length; i++) {
    obj[a[i] ** 2] = (obj[a[i] ** 2] || 0) + 1;
  }
  for (const key of b) {
    if (obj[key]) obj[key] -= 1;
    else return false;
  }
  return true;
};
console.log(same2([1, 2, 3], [1, 9, 1]));
