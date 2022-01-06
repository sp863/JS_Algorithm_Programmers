function solution(a, b) {
  var answer = 0;

  const arr = [a, b];
  arr.sort((a, b) => a - b);

  const [x, y] = arr;

  let sum = 0;
  for (let i = x; i <= y; i++) {
    sum += i;
  }

  return sum;
}

//IDEAL SOLUTION
// - 가우스 공식 사용...
// function adder(a, b){
//   var result = 0
//   return (a+b)*(Math.abs(b-a)+1)/2;
// }
