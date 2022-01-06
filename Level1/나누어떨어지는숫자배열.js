function solution(arr, divisor) {
  var answer = [];

  arr.forEach((num) => {
    if (num % divisor === 0) {
      answer.push(num);
    }
  });

  answer.sort((a, b) => a - b);

  if (!answer.length) return [-1];
  return answer;
}

//IDEAL SOLUTION
// - filter 사용

// function solution(arr, divisor) {
//     var answer = arr.filter(v => v%divisor == 0);
//     return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
// }
