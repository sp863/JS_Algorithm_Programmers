function solution(arr) {
  var answer = 0;

  let total = arr.reduce((acc, cur) => acc + cur, 0);

  return total / arr.length;
}
