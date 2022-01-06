function solution(arr) {
  var answer = [];

  arr.push("x");

  let comp = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (comp != arr[i]) {
      answer.push(comp);
      comp = arr[i];
    }
  }

  return answer;
}

//IDEAL SOLUTION
// - filter 를 이용한 초간단 코드

// function solution(arr) {
//   return arr.filter((val, index) => val != arr[index + 1]);
// }
