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
