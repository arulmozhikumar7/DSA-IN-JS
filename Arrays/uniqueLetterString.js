/**
 * @param {string} s
 * @return {number}
 */
var uniqueLetterString = function (s) {
  const n = s.length;
  const pos = Array.from({ length: 26 }, () => []);
  for (let i = 0; i < n; i++) {
    pos[s.charCodeAt(i) - 65].push(i);
  }
  let result = 0;
  for (let i = 0; i < 26; i++) {
    const indices = pos[i];
    const len = indices.length;
    for (let j = 0; j < len; j++) {
      const left = j === 0 ? indices[j] + 1 : indices[j] - indices[j - 1];
      const right =
        j === len - 1 ? n - indices[j] : indices[j + 1] - indices[j];
      result += left * right;
    }
  }
  return result;
};
