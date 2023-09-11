const checkAnagram = (a, b) => {
  if (a.length !== b.length) return false;
  let obj = {};
  for (const values of a) {
    obj[values] = (obj[values] || 0) + 1;
  }
  for (const values of b) {
    if (obj[values]) obj[values] -= 1;
    else return false;
  }
  return true;
};

console.log(checkAnagram("aaz", "zzaa"));
console.log(checkAnagram("anagram", "nagaram"));
console.log(checkAnagram("",""));
