function solution(num) {
  let cnt = 0;
  let tempNum = num;

  while (tempNum > 1) {
    if (tempNum % 2 === 0) {
      tempNum /= 2;
    } else {
      tempNum = tempNum * 3 + 1;
    }
    cnt++;
    if (cnt === 500) return -1;
  }
  return cnt;
}

//IDEAL SOLUTION
// - while, ternary operator 사용
function collatz(num) {
  var answer = 0;
  while (num != 1 && answer != 500) {
    num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return num == 1 ? answer : -1;
}
