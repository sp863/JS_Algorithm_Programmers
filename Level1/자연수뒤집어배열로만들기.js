function solution(n) {
  var answer = [];

  let arr = (n + "").split("");

  for (let i = arr.length - 1; i >= 0; i--) {
    answer.push(+arr[i]);
  }

  return answer;
}

//IDEAL SOLUTION
// - 문자 풀이 그리고 숫자 풀이 구분
// function solution(n) {
//     // 문자풀이
//     // return (n+"").split("").reverse().map(v => parseInt(v));

//     // 숫자풀이
//     var arr = [];

//     do {
//         arr.push(n%10);
//         n = Math.floor(n/10);
//     } while (n>0);

//     return arr;
// }
