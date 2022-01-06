function solution(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= 9; j++) {
      if (+s[i] === j) {
        count += 1;
        break;
      }
    }
  }
  if (s.length !== 4 && s.length !== 6) return false;
  if (count === s.length) return true;
  return false;
}
