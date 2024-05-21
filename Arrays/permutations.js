function checkInclusion(s1, s2) {
  const len1 = s1.length;
  const len2 = s2.length;
  if (len1 > len2) return false;
  const count1 = new Array(26).fill(0);
  const count2 = new Array(26).fill(0);
  for (let i = 0; i < len1; i++) {
    count1[s1.charCodeAt(i) - 97]++;
    count2[s2.charCodeAt(i) - 97]++;
  }
  const matches = (arr1, arr2) => {
    for (let i = 0; i < 26; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  };
  for (let i = len1; i < len2; i++) {
    count2[s2.charCodeAt(i) - 97]++;
    count2[s2.charCodeAt(i - len1) - 97]--;
    if (matches(count1, count2)) return true;
  }
  return false;
}

console.log(checkInclusion("ab", "eidbaoo"));
