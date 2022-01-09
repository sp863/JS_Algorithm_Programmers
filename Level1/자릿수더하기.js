function solution(n) {
  var answer = 0;

  let x = n + "";
  answer = x.split("").reduce((acc, num) => acc + +num, 0);
  console.log(answer);

  return answer;
}
