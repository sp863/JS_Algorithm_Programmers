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

//IDEAL SOLUTION
// - regex 쓰는 답안
// function alpha_string46(s){
//   var regex = /^\d{6}$|^\d{4}$/;
//   return regex.test(s);
// }
