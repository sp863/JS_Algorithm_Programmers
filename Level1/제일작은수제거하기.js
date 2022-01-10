function solution(arr) {
  var answer = [];

  if (arr.length <= 1) return [-1];

  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return arr.filter((num) => num !== min);
}

//IDEAL SOLUTION
// - splice, indexOf, Math 함수 사용
// function solution(arr) {
//     arr.splice(arr.indexOf(Math.min(...arr)),1);
//     if(arr.length<1)return[-1];
//     return arr;
// }
