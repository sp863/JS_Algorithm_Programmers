function solution(n) {
  const temp = n + "";

  let answer = +temp
    .split("")
    .map((num) => +num)
    .sort((a, b) => b - a)
    .join("");

  return answer;
}
